Ext.define('Person',{
    config: {
        name: 'unamed',
        gender: 'unknown',
    },
    constructor: function(config){
        this.initConfig(config);
    }
});

var obj = new Person({name: 'SANJEEV', gender: 'MALE'});
alert(obj.getName());
alert(obj.getGender());