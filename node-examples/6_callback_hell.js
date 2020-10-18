var fs = require('fs');
 
fs.rename('old.txt', 'new.txt',
    
    function (err) {
        if (err) throw err;
        console.log('File Renamed.');

        fs.unlink('new.txt',
            function (err) {
                if (err) throw err;
                console.log('File Deleted.');
            }
        ); 
    }
);