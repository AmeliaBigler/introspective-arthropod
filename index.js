// Packages/modules needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = require('./src/generateHTML');

const questions = [
    {
        type: 'input',
        message: 'Team Manager name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Team Manager Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Team Manager email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Team Manager Office number:',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Add Engineer, Intern, or finish building team:',
        name: 'addEmployee',
        choices: [
            'Engineer',
            'Intern',
            'No more employees to add. Finish building team.'
        ]
    },
    {
        type: 'input',
        message: 'GitHub profile link:',
        name: 'github'
    },
    
    {
        type: 'input',
        message: 'Intern School:',
        name: 'school',
    }
];

// Define function to write HTML file
function writeToFile(data) {
    const webpageHTML = generateHTML(data);
    const fileName = `sampleWebpage.html`;
    fs.writeFile(fileName, webpageHTML, (err) =>
        err ? console.log(err) : 
        console.log('Success!')
    );
}

// Define function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
        });
}

// Function call to initialize app
init();
