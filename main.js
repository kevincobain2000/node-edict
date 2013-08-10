var Edict = require("./lib/main.js");
module.exports = Edict;

edict = new Edict;


edict.setDB(2);
edict.redisSetEntries(function(callback){
    
});


edict.get('匜;半挿',function(callback){
    console.log(callback.Gloss);
});

