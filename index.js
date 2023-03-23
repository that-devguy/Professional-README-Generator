// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a description of your project',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'What technologies does your project use?',
            name: 'technologies',
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
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
