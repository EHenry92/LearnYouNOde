//Filtered LS
var fs = require('fs');
var path = require('path');
var ext = "." + process.argv[3];
function printIt()  {
    fs.readdir(process.argv[2],function (err,files)  {
        for (var i=0;i<files.length;i++)    {
            if(err) {
                console.log(err);
            }
//path.extname(fileName) return the extension with the '.'           
            if(path.extname(files[i]) == ext)   {
                console.log(files[i]);
            }
        }
    })
}
printIt ();