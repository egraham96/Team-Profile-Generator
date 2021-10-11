const Employee = require('employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.officeNumber = officenum;
        this.school=school
    }
    getSchool(){}
    getRole(){return 'manager'}
}

module.exports = Intern;