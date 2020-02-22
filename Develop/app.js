// required packages and paths
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const render = require("./lib/htmlRenderer");
const fs = require("fs");
// const main = require("./templates/main.html")


init();
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
    });
};

function init() {
    const mainTemp = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <title>Team Members</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Team Members</h1>
            </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col" id="team">
              {{ team }}
            </div>
          </div>
        </div>
      </body>
    </html>`
    fs.writeFileSync("./templates/main.html", mainTemp, function (err) {
        if (err) {
            return console.log("writefile failed")
        }
    });
};