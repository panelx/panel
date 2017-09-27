var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('package', response => {
        io.emit('newPackage', response);
    });
});

/**
 *  3100 is main server
 */
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