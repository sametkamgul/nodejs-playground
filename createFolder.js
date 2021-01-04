// this example is creates a folder

const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'testFolder'), {}, function(err) {
    if(err) {
        console.log('folder exists');
        throw err; // Throws an error
    }
    else{
        console.log('folder is created.');
    }
});