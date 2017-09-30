var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Dashboard = require('./model/Dashboard.js');
var Widget = require('./model/Widget.js');


mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect('mongodb://localhost/panelx', {
    useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, '> Connection error: '));

io.on('connection', socket => {
    console.log('> Connected.');
    socket.on('package', response => {
        console.log('> Package: ' + JSON.stringify(response));
        io.emit('newPackage', response);
    });
});

app.post('/widget/new', (req, res) => {
    var w = new Widget(req.body);
    
    const dId = req.query.dashboardId;
    
    w.save(() => {
        Dashboard.update({_id: dId}, {$push: {widgets: w}}, () => {
            Dashboard.find().populate('widgets').exec((err, dashboards) => {
                res.send(dashboards);
            });
        });
    });
});

app.post('/dashboard/new', (req, res) => {
    var d = new Dashboard({ title: req.body.title });
    d.save(() => {
        Dashboard.find().populate('widgets').exec((err, dashboards) => {
            res.send(dashboards);
        });
    });
});

app.delete('/dashboard/:dId', (req, res) => {
    Dashboard.findOne({_id: req.params.dId}, (err, d) => {
        d.widgets.forEach(item => {
            Widget.find({_id: item}).remove().exec();
        });
        
        d.remove((() => {
            Dashboard.find().populate('widgets').exec((err, dashboards) => {
                res.send(dashboards);
            });
        }));
    });
});

app.delete('/widget/:wId', (req, res) => {
    Widget.find({_id: req.params.wId}).remove().exec((err, w) => {
        Dashboard.find().populate('widgets').exec((err, dashboards) => {
            res.send(dashboards);
        });
    });
});

app.get('/dashboards', (req, res) => {
    Dashboard.find().populate('widgets').exec((err, dashboards) => {
        res.send(dashboards);
    });
});

http.listen(3001, () => {
    console.log(`
             ____  ___    _   __________   _  __
           / __  \/   |  / | / / ____/ /  | |/ /
          / /_/ / /| | /  |/ / __/ / /   |   / 
         / ____/ ___ |/ /|  / /___/ /___/   |  
        /_/   /_/  |_/_/ |_/_____/_____/_/|_|  
        
    ===============================================
    `);
});