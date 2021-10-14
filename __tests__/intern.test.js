const Intern = require('../lib/intern');

const intern = new Intern ('Emma', 'eeg4@uw.edu', '21', 'University of Washington');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(intern.getName()).toEqual('Emma')

    });    


    it('should return the employee email', ()=> {
        expect(intern.getEmail()).toEqual('eeg4@uw.edu')
    });

    it('should return the employee id', ()=> {
      expect(intern.getId()).toEqual('21')
  });

    it('should return the github username of the engineer', ()=> {
        expect(intern.getSchool()).toEqual('University of Washington')
    });

    it('should return the employee role', ()=> {
        expect(intern.getRole()).toEqual('Intern')
    });



})

