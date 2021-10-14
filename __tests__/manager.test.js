const Manager = require('../lib/manager');

const manager = new Manager ('Emma', 'eeg4@uw.edu', '21',  '13');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(manager.getName()).toEqual('Emma')

    });    


    it('should return the employee email', ()=> {
        expect(manager.getEmail()).toEqual('eeg4@uw.edu')
    });

    it('should return the employee id', ()=> {
      expect(manager.getId()).toEqual('21')
  });

    it('should return the github username of the engineer', ()=> {
        expect(manager.getOfficeNumber()).toEqual('13')
    });

    it('should return the employee role', ()=> {
        expect(manager.getRole()).toEqual('Manager')
    });



})