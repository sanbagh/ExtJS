Ext.define('Person', {
  name: 'unnamed',
  getName: function () {
    return 'name is  = ' + this.name;
  },
  constructor: function (personName) {
    this.name = personName;
  },
});
Ext.define(
  'Student',
  {
    extend: 'Person',
    rollNumber: 0,
    getStudentInfo: function () {
      return 'student name = ' + this.name + ' and roll number =' + this.rollNumber;
    },
    constructor: function (studentName, rollNumber) {
      if (studentName && rollNumber) {
        this.rollNumber = rollNumber;        
        this.callParent(arguments);
      }
    },
    statics: {
      getSchoolName: function () {
        return 'ABC school';
      },
    },
  },
  function () {
    alert('student object created');
  }
);

//approach 1
// var student = Ext.create('Student','SANJEEV',100);
// alert(student.getStudentInfo());

//approach 2
var student = new Student('SANJEEV', 100);
alert(student.getStudentInfo());
alert(Student.getSchoolName());



