// Packages/modules needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = require('./src/generateHTML');

const managerQs = [
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
    }
];

const engineerQs = [
    {
        type: 'input',
        message: 'Engineer name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Engineer Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Engineer email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'GitHub profile link:',
        name: 'github'
    }
];

const internQs = [
    {
        type: 'input',
        message: 'Intern name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Intern Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Intern email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Intern School:',
        name: 'school',
    }
];

const addEmployeeQ = {
    type: 'list',
    message: 'Add Engineer, Intern, or finish building team:',
    name: 'addEmployee',
    choices: [
        'Engineer',
        'Intern',
        'No more employees to add. Finish building team.'
    ]
}

// Define function to write HTML file
function writeToFile(data) {
    // const webpageHTML = generateHTML(data);
    webpageHTML = JSON.stringify(data); //placeholder test. remove JSON after code generateHTML.js
    fs.writeFile('employees.html', webpageHTML, (err) =>
        err ? console.log(err) : 
        console.log('Success!')
    );
}

// Define function to append HTML file
function appendToFile(data) {
    // const webpageHTML = generateHTML(data);
    webpageHTML = JSON.stringify(data); //placeholder test. remove JSON after code generateHTML.js
    fs.appendFile('employees.html', webpageHTML, (err) =>
    err ? console.log(err) : 
    console.log('Success!'));
}

function addEmployeeFunction() {
    inquirer.prompt(addEmployeeQ)
    .then((data) => {
        if(data.addEmployee === 'Engineer') {
            inquirer.prompt(engineerQs)
            .then((data) => {
                appendToFile(data);
                addEmployeeFunction();
            })
        } else if (data.addEmployee === 'Intern') {
            inquirer.prompt(internQs)
            .then((data) => {
                appendToFile(data);
                addEmployeeFunction();
            })
        } 
    });
}


// Define function to initialize app
function init() {
    inquirer.prompt(managerQs)
    .then((data) => {
        writeToFile(data)
        addEmployeeFunction();  
    })
}

// Function call to initialize app
init();
