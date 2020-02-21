const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const render = require("./lib/htmlRenderer");
const fs = require("fs");
// const main = require("./templates/main.html")

generateMembers();
var teamMembers = [];
function generateMembers() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            message: "What is your manager's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's e-mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "office",
        },
        {
            type: "list",
            message: "Are there any other roles you would like to add?",
            name: "roles",
            choices: [
                "Engineer",
                "Intern",
                "None"
            ]
        }
    ]).then(function (manager) {
        const managerClass = new Manager(manager.name, manager.id, manager.email, manager.office);
        teamMembers.push(managerClass);
        const roles = manager.roles;
        if (roles === "Engineer") {
            generateEngineer();
        } else if (roles === "Intern") {
            generateIntern();
        } else {
            renderArray();
            return;
        }
    });
};

function generateEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            message: "What is your engineer's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your engineer's e-mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "github",
        },
        {
            type: "list",
            message: "Are there any other roles you would like to add?",
            name: "roles",
            choices: [
                "Engineer",
                "Intern",
                "None"
            ]
        }
    ]).then(function (engineer) {
        const engineerClass = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
        teamMembers.push(engineerClass);
        const roles = engineer.roles;
        if (roles === "Engineer") {
            generateEngineer();
        } else if (roles === "Intern") {
            generateIntern();
        } else {
            renderArray();
            return;
        }
    });
}

function generateIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            message: "What is your intern's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's e-mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "What school does your intern attend?",
            name: "school",
        },
        {
            type: "list",
            message: "Are there any other roles you would like to add?",
            name: "roles",
            choices: [
                "Engineer",
                "Intern",
                "None"
            ]
        }
    ]).then(function (intern) {
        const internClass = new Intern(intern.name, intern.id, intern.email, intern.school);
        teamMembers.push(internClass);
        const roles = intern.roles;
        if (roles === "Engineer") {
            generateEngineer();
        } else if (roles === "Intern") {
            generateIntern();
        } else {
            renderArray();
            return;
        }
    });
}

function renderArray() {
    // console.log(teamMembers);
    const htmlArray = render(teamMembers);
    console.log(htmlArray);
    fs.writeFileSync("./templates/main.html", htmlArray, function (err) {
        if (err) {
            return console.log("writefile failed")
        }
    })
    // for (let i = 0; i < htmlArray.length; i++) {
    //     fs.writeFileSync("./templates/main.html", htmlArray[i], function (err) {
    //         if (err) {
    //             return console.log("writefile failed")
    //         }
    //     })
    // }
}