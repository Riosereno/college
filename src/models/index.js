const Student = require('./Student');
const Profesor = require('./Profesor');
const Course = require('./Course');
const Test = require('./Test');
const Score = require('./Score');

Profesor.belongsToMany(Student, { through: 'ProfesorStudent' });
Student.belongsToMany(Profesor, { through: 'ProfesorStudent' });
Course.belongsToMany(Student, { through: 'StudentCourses' });
Student.belongsToMany(Course, { through: 'StudentCourses' });

Test.hasMany(Score);
Student.hasMany(Score);
Score.belongsTo(Test);
Score.belongsTo(Student);
