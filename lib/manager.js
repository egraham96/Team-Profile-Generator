const Employee = require('employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officenum;
    }
    getRole(){return 'manager'}
}

module.exports = Manager;