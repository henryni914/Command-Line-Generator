const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager;

// const manage = new Manager("henry", 1, "henry@henry", 10);
// console.log (manage);