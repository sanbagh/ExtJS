Ext.define('ClassA', {
  funcA: function () {
    return 'ClassA method called';
  },
});
Ext.define(
  'ClassB',
  {
    getName: function () {
      return 'ClassB';
    },
    mixins: { funcA: 'ClassA' },
  },
  function () {
    'object created';
  }
);

var obj = new ClassB();
alert(obj.funcA());
alert(obj.getName());
