const inquirer = require("inquirer");

generateMembers();
const teamMembers = [];
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
        // console.log(manager);
        const roles = manager.roles;
        teamMembers.push(manager);
        console.log(teamMembers);
        if (roles === "Engineer") {
            generateEngineer();
            //    console.log(engineer);
        } else if (roles === "Intern") {
            generateIntern();
         } else {
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
        // console.log("This is from the generate engineer function: " + engineer);
        teamMembers.push(engineer);
        console.log(teamMembers);
        if (roles === "Engineer") {
            generateEngineer();
            // console.log(engineer);
        } else if (roles === "Intern") {
            generateIntern();
        } else {
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
        console.log("This is from the generate intern function: " + intern);
        teamMembers.push(intern);
        console.log(teamMembers);
        if (roles === "Engineer") {
            generateEngineer();
        } else if (roles === "Intern") {
            generateIntern();
        } else {
            return;
        }
    });
}
