
const Engineer = require('../lib/engineer');

const engineer = new Engineer ('Emma', 'eeg4@uw.edu', '21', '@skchung93');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(engineer.getName()).toEqual('Emma')

    });    


    it('should return the employee email', ()=> {
        expect(engineer.getEmail()).toEqual('eeg4@uw.edu')
    });

    it('should return the employee id', ()=> {
      expect(engineer.getId()).toEqual('21')
  });

    it('should return the github username of the engineer', ()=> {
        expect(engineer.getGithub()).toEqual('@skchung93')
    });

    it('should return the employee role', ()=> {
        expect(engineer.getRole()).toEqual('Engineer')
    });



})