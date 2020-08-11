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
obj.setName('Name changed');
obj.setGender('Gender changed');
alert("changed " + obj.getName());
alert("changed " + obj.getGender());

//custom setter

Ext.define('Employee',{
    config: {
        name: 'unamed',
        gender: 'unknown',
        salary: 0
    },
    applySalary: function(sal){
        return sal * 10;
    },
    updateSalary: function(oldVal, newVal){
        return 'old salary = '+ oldVal + ' new salary = '+ newVal;
    },
    constructor: function(config){
        this.initConfig(config);
    }
});
obj = new Employee({name: 'Sanjeev',gender: 'Male', salary: 10000});
alert(obj.getName());
alert(obj.getGender());
alert(obj.getSalary());
