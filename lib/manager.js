const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
        
        this.getRole = () => {
            console.log('Manager');
        }
    }
}

module.exports = Manager;