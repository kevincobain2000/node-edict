
Install
-------

npm install node-edict

or

npm install https://github.com/kevincobain2000/node-edict/tarball/master

Usage
-----

var Edict = require("node-edict");
edict = new Edict;

edict.setDB(2);
edict.get('私',function(callback){
    console.log(callback.Gloss);
    console.log(callback.PRON);
});
