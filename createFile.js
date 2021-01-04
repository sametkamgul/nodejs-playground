// this example is creates a file

const fs = require('fs');
const path = require('path');

// this replaces the data
fs.writeFile(path.join(__dirname, 'sample_file.txt'), 'hello world!!!', function(err) {
    if(err) {
        console.log('file exists');
        throw err; // Throws an error
    }
    else{
        console.log('file is created.');
    }
});

// this appends the data
fs.appendFile(path.join(__dirname, 'sample_file.txt'),'I love coding...', 'utf8', err => {
    if(err) throw err;
    console.log('data is appended to the file.');
});


fs.readFile(path.join(__dirname, 'sample_file.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log('data: ', data);
});