
const Intern= require('../lib/intern');

const intern1 = new Intern ('Emma', 'eeg4@uw.edu', '10', 'UW');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(intern1.getName()).toEqual('Emma')

    });    


    it('should return the employee email', ()=> {
        expect(intern1.getEmail()).toEqual('eeg4@uw.edu')
    });

    it('should return the employee id', ()=> {
      expect(intern1.getId()).toEqual('10')
  });

    it('should return the github username of the engineer', ()=> {
        expect(intern1.getSchool()).toEqual('UW')
    });

    it('should return the employee role', ()=> {
        expect(intern1.getRole()).toEqual('Intern')
    });



})