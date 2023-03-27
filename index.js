// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value) => {if(value){return true} else {return 'Please give your project a title.'}}
        },
        {
            type: 'list',
            message: 'Please choose your license.',
            name: 'license',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'Other'],
            default: 'MIT',
        },
        {
            type: 'input',
            message: 'Please write a description of your project.',
            name: 'desc',
            validate: (value) => {if(value){return true} else {return 'Please give your project a brief description, you can edit this later.'}}
        },
        {
            type: 'checkbox',
            message: 'What technologies does your project use?(You can add anything we missed after your README has been generated)',
            name: 'technologies',
            choices: [
              {name: 'HTML5'},
              {name: 'CSS'},
              {name: 'JavaScript'},
              {name: 'Node.js'},
              {name: 'Angular'},
              {name: 'Vue.js'},
              {name: 'Express'},
              {name: 'MongoDB'},
              {name: 'MySQL'},
              {name: 'PostgreSQL'},
              {name: 'Git'},
              {name: 'GitHub Actions'},
              {name: 'Travis CI'},
              {name: 'Heroku'},
              {name: 'AWS'},
              {name: 'Docker'},
              {name: 'Kubernetes'},
            ],
            validate: (value) => {if(value){return true} else {return 'Please select atleast one of the technologies used to build your project.'}}
        },
        {
            type: 'input',
            message: 'What is your GitHub repository URL?',
            name: 'repoURL',
        },
        {
            type: 'input',
            message: 'What is your deployed application URL?',
            name: 'appURL',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('README.md file has been successfully created!');
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
