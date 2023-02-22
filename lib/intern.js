const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;

        this.getRole = () => {
            return 'Intern';
        }
    }
}

module.exports = Intern;