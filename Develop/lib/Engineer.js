const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;

// const engine = new Engineer("Bryan", 2, "bryan@bryan", "bryan@github.com");
// console.log(engine);