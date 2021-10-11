const Employee = require('employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officenum;
    }
    getRole(){return 'manager'}
}

module.exports = Manager;