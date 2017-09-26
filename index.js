const express = require('express');
const app = express();

app.use(express.static('node_modules'));

app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});

app.listen(3000, () => {
    console.log(`
         ____  ___    _   __________   _  __
        / __  \/   |  / | / / ____/ /  | |/ /
       / /_/ / /| | /  |/ / __/ / /   |   / 
      / ____/ ___ |/ /|  / /___/ /___/   |  
     /_/   /_/  |_/_/ |_/_____/_____/_/|_|  
     
===============================================
    `);
});
