const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('lib/employee');
const Manager = require ('lib/manager');
const Engineer = require('lib/engineer');
const Intern = require ('lib/intern');

console.log('Welcome to the Team Profile Generator.',
'According to the Professional ReadMe guide, a good ReadMe consists of the following sections:\n',
'Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.\n',
'Answer the following prompts to create your own ReadMe file!');


const questions = [{
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What would you like the name of your project repository to be? (If project already exists, please use its GitHub name)',
    },
    {
     type: 'input',
     name: 'title',
     message: 'Please enter a title for your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please add installation notes for your project here:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe how your project is used:',

    },
    {
      type: 'input',
      name: 'tech',
      message: 'Please list any technologies used in your project:',
    },
    {   
      type: 'input',
      name: 'test',
      message: 'Please add any project testing notes here:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can someone contribute to your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project?', 
      choices: [
              "Apache",
              "Berkeley",
              "GPL",
              "MIT",
              "Mozilla",
              "None",
          ]
      },
    ];



// Function used to write the generated HTML file
    fs.writeFile('./dist/index.html', 'html', (err) =>{
      if (err) {
        throw err;
    }})
