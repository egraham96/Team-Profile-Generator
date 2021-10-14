const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
    }
    ]).then((data) => {
        employeetype = data.type;
        if (employeetype === 'Engineer') {
            engineerInput()
        } else { internInput() }
    })
}

function engineerInput() {
    inquirer.prompt([{
        type: 'input',
        name: 'Engineername',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'Engineeremail',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'Engineerid',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'Engineergh',
        message: "What is the engineer's Github username?",
    }
    ])
        .then((data) => {
            Engineername = data.Engineername;
            Engineeremail = data.Engineeremail;
            Engineerid = data.Engineerid;
            Engineergh = data.Engineergh;
            NewEngineer = new Engineer(Engineername, Engineeremail, Engineerid, Engineergh)
            officeteam.push(NewEngineer);
            Final()
        });
}
function internInput() {
    inquirer.prompt([{
        type: 'input',
        name: 'Internname',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'Internemail',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'Internid',
        message: "What is the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'Internschool',
        message: "What school does the intern attend?",
    },
    ])
        .then((data) => {
            Internname = data.Internname;
            Internemail = data.Internemail;
            Internid = data.Internid;
            Internschool = data.Internschool;
            NewIntern = new Intern(Internname, Internemail, Internid, Internschool)
            officeteam.push(NewIntern);
            Final()
        });
}

function Final() {
    inquirer.prompt([{
        type: 'rawlist',
        name: 'more',
        message: 'Would you like to input another employee?',
        choices: ['Yes', 'No'],
    }
    ]).then((data) => {
        choice = data.more;
        if (choice === 'Yes') {
            Nextemployee()
        } else {
            generateHTML()
        }
    })
}

function generateHTML() {
    let cardhtml=``;
    for (let i = 0; i < officeteam.length; i++) {
        if (officeteam[i].getRole() === 'Manager') {
            Mcard = `<div id="Mbox"><h4>Manager</h4></div><br>
        <p><b>Name:</b> ${officeteam[i].getName()}</p><br>
        <p><b>Email Address:</b><a href='mailto:${officeteam[i].getEmail()}'>${officeteam[i].getEmail()}</a></p><br>
        <p><b>Employee Id:</b>${officeteam[i].getId()}</p><br>
        <p><b>Office Number:</b>${officeteam[i].getOfficeNumber()}</p>`
        }
        else if (officeteam[i].getRole() === 'Engineer') {
            Ecard = `<div class="card"><div id="Ebox"><h4>Engineer</h4></div><br>
            <p><b>Name:</b> ${officeteam[i].getName()}</p><br>
        <p><b>Email Address:</b> <a href='mailto:${officeteam[i].getEmail()}'>${officeteam[i].getEmail()}</a></p><br>
        <p><b>Employee Id:</b> ${officeteam[i].getId()}</p><br>
        <p><b>Github:</b> ${officeteam[i].getGithub()}</p>
        </div>`
    cardhtml+=Ecard}
        else if (officeteam[i].getRole() === 'Intern') {
        Icard = `<div class="card"><div id="Ibox"><h4>Intern</h4></div><br>
        <p><b>Name:</b> ${officeteam[i].getName()}</p><br>
        <p><b>Email Address:</b> <a href='mailto:${officeteam[i].getEmail()}'>${officeteam[i].getEmail()}</a></p><br>
        <p><b>Employee Id:</b> ${officeteam[i].getId()}</p><br>
        <p><b>Intern's School:</b> ${officeteam[i].getSchool()}</p>
        </div>`
        cardhtml+=Icard}
        }



    const HTMLbody = `<!DOCTYPE html>
<html>
<head>
    <title>Team Profile</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./reset.css" />
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron">
</head>
<body>

    <header>
        <h1>My Workplace Team</h1>
    </header><main><br><div id="Mcontainer">${Mcard}</div>
    <div id="Econtainer">${cardhtml}
    </div>
</main>
    <script src=index.js></script>
</body>
</html>`;


// Used to write the generated HTML file
fs.writeFile('./dist/index.html', HTMLbody, (err) => {
    if (err) {
        throw err;
    }
})}

managerInput();
