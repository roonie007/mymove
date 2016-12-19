# MyMove
This is a module to move a file or a directory using real environment command MOVE & MV

### Install
```sh
$ npm install mymove
```
or (globally)
```sh
$ npm install mymove -g
```
### Example
```sh
var mymove = require("mymove");
mymove(From,To,function(err)
{
    if(err)
        throw err;
    console.log("moved");
});
```
