// Packages/modules needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');
const appendHTML = require('./src/appendHTML');

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
        message: 'GitHub username:',
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
    const webpageHTML = generateHTML(data);
    fs.writeFile('./dist/employees.html', webpageHTML, (err) =>
        err ? console.log(err) : 
        console.log('Success!')
    );
}

// Define function to append HTML file
function appendToFile(data) {
    const webpageHTML = appendHTML(data);
    fs.appendFile('./dist/employees.html', webpageHTML, (err) =>
    err ? console.log(err) : 
    console.log('Success!'));
}

// Define function to dynamically add the quantity of employees the user enters
function addEmployeeFunction() {
    inquirer.prompt(addEmployeeQ)
    .then((data) => {
        if(data.addEmployee === 'Engineer') {
            inquirer.prompt(engineerQs)
            .then((data) => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                appendToFile(engineer);
                addEmployeeFunction();
            })
        } else if (data.addEmployee === 'Intern') {
            inquirer.prompt(internQs)
            .then((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                appendToFile(intern);
                addEmployeeFunction();
            })
        } else {
            const endHTML = appendHTML('end');
            fs.appendFile('./dist/employees.html', endHTML, (err) =>
            err ? console.log(err) : 
            console.log('Success!'));
        }
    });
}


// Define function to initialize app
function init() {
    inquirer.prompt(managerQs)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        writeToFile(manager);
        addEmployeeFunction();  
    })
}

// Function call to initialize app
init();
