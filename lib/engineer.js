const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;

        this.getGithub = () => {
            return github;
        }

        this.getRole = () => {
            return 'Engineer';
        }
    }
}

module.exports = Engineer;