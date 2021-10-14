const Employee = require('../lib/employee');

const employee = new Employee ('Emma','eeg4@uw.edu', '21' );

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(employee.getName()).toEqual('Emma')

    });    

    it('should return the employee email', ()=> {
        expect(employee.getEmail()).toEqual('eeg4@uw.edu')
    });

    it('should return the employee id', ()=> {
      expect(employee.getId()).toEqual('21')
  });

    it('should return the employee role', ()=> {
        expect(employee.getRole()).toEqual('Employee')
    });



})