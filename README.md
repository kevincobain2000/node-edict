Install
-------

npm install node-edict

or

npm install https://github.com/kevincobain2000/node-edict/tarball/master

Usage
-----

var Edict = require("node-edict");
edict = new Edict;

Note
-----

If running for the first time then please wait for around 1 minute while the parser reads the dict file and enters the entries to 
REDIS.
<pre>
edict.setDB(2); //selects 2 on Redis
edict.get('私',function(result){ 
    console.log(result.Gloss);
    console.log(result.PRON);
}); 
</pre>

Must 
----

Redis server running

