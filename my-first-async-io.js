const fs = require('fs');

if(process.argv.length < 3) {
    console.log('Please specify a file to read');
}

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if(error) {
        console.error(error);
    }

    const lines = data.split('\n').length - 1;
    console.log(lines);
});