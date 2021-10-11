const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('lib/employee');
const Manager = require('lib/manager');
const Engineer = require('lib/engineer');
const Intern = require('lib/intern');

let officeteam = [];
console.log('Welcome to the Team Profile Generator.\n',
    'The Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person \n',
    'Answer the following prompts to create your own HTML file!');

function managerInput() {
    inquirer.prompt([{
        type: 'input',
        name: 'Managername',
        message: "What is your team manager's name?",
    },
    {
        type: 'input',
        name: 'Manageremail',
        message: "What is your team manager's email address?",
    },
    {
        type: 'input',
        name: 'Managerid',
        message: "What is your team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'Manageroffice',
        message: "What is your team manager's office number?",
    },
    ])
        .then((data) => {
            Managername = data.Managername;
            Manageremail = data.Manageremail;
            Managerid = data.Managerid;
            Manageroffice = data.Manageroffice;
            TeamManager = new Manager(Managername, Manageremail, Managerid, Manageroffice)
            officeteam.push(TeamManager);
            Nextemployee()
        });
}

function Nextemployee() {
    inquirer.prompt([{
        type: 'rawlist',
        name: 'type',
        message: 'Is the next employee an engineer or an intern?',
        choices: ['Engineer', 'Intern'],
    },
    ]).then((data) => {
        employeetype = data.type;
        if (employeetype === 'Engineer') { engineerInput() }
        else { internInput() }
    })
}


// Function used to write the generated HTML file
fs.writeFile('./dist/index.html', 'html', (err) => {
    if (err) {
        throw err;
    }
})

managerInput();
