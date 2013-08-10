Install
-------

<pre>

npm install node-edict
</pre>

or

<pre>
npm install https://github.com/kevincobain2000/node-edict/tarball/master
</pre>

Usage
-----
<pre>
var Edict = require("node-edict");
edict = new Edict;
</pre>

Note
-----

If running for the first time then please wait for around 1 minute while the parser reads the dict file and enters the entries to 
REDIS.

Run the following

<pre>

edict = new Edict;
edict.setDB(2);
edict.redisSetEntries(function(callback){
    
});

</pre>

Once the Redis is set Already

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

