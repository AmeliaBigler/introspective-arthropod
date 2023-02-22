class Employee {
    constructor (name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
            console.log(this.name);
        }
        this.getID = () => {
            console.log(this.id);
        }
        this.getEmail = () => {
            console.log(this.email);
        }
        this.getRole = () => {
            return 'Employee';
        }
    }
};

module.exports = Employee;