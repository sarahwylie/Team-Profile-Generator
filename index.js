const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// const path = require('path');
const fs = require('fs');
const pageTemplate = require('./src/page-template');

const teamMembers = [];
const validation = [];

function buffet() {
    function createMgr() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'What is the name of the team manager? (Required)',
                validate: managerInput => {
                    if (managerInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'mgrid',
                message: "What is the manager's ID number?",
                validate: function (mgridInput) {
                    if (mgridInput) {
                        return true;
                    } else {
                        console.log("Please enter manager's ID number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'mgremail',
                message: "Please enter the manager's email address.",
                validate: function (emailInput) {
                    console.info(emailInput)
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                        return true
                    } else {
                        console.info("You have entered an invalid email address!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the manager's office number?",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the office number.");
                        return false;
                    }
                }
            }
        ])
            .then(answers => {
                const manager = new Manager(answers.manager, answers.mgrid, answers.mgremail, answers.office)
                teamMembers.push(manager);
                validation.push(answers.mgrid)
                employeeOptions();
            })
    }
    function employeeOptions() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'engintern',
                message: 'Would you like to enter an engineer or an intern to continue building your team?',
                choices: ['Engineer', 'Intern', 'I am finished entering my team'],
            },
        ])
            .then(answers => {
                switch (answers.engintern) {
                    case 'Engineer':
                        addEng();
                        break
                    case 'Intern':
                        addInt();
                        break
                    case 'I am finished entering my team':
                        buildIt();    
                    // default:
                    //     buildIt();
                }
            })
    }
    function addEng() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineer',
                message: 'What is the name of your engineer? (Required)',
                validate: managerInput => {
                    if (managerInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engid',
                message: "What is the engineer's ID number?",
                validate: function (engidInput) {
                    if (engidInput) {
                        if (validation.includes(engidInput)) {
                            return 'This ID is taken. Please enter a new ID.'
                        } else {
                            return true;
                        }
                    } else {
                        console.log("Please enter engineer's ID number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'mgremail',
                message: "Please enter the engineer's email address.",
                validate: function (emailInput) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                        return true
                    } else {
                        console.log("You have entered an invalid email address!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'git',
                message: "What is the engineer's GitHub username?",
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        console.log("Please enter the username.");
                        return false;
                    }
                }
            }
        ])
            .then(answers => {
                const engineer = new Engineer(answers.engineer, answers.engid, answers.engemail, answers.git)
                teamMembers.push(engineer);
                validation.push(answers.engid)
                employeeOptions();
            })
    }
    function addInt() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intern',
                message: 'What is the name of your intern? (Required)',
                validate: internInput => {
                    if (internInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'intid',
                message: "What is the intern's ID number?",
                validate: function (intidInput) {
                    if (intidInput) {
                        if (validation.includes(intidInput)) {
                            return 'This ID is taken. Please enter a new ID.'
                        } else {
                            return true;
                        }
                    } else {
                        console.log("Please enter intern's ID number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'intemail',
                message: "Please enter the intern's email address.",
                validate: function (emailInput) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                        return true
                    } else {
                        console.log("You have entered an invalid email address!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
                validate: schInput => {
                    if (schInput) {
                        return true;
                    } else {
                        console.log("Please enter the school.");
                        return false;
                    }
                }
            }
        ])
            .then(answers => {
                const intern = new Intern(answers.intern, answers.intid, answers.intemail, answers.school)
                teamMembers.push(intern);
                validation.push(answers.intid)
                employeeOptions();
            })
    }
    function buildIt() {
        fs.writeFile('./dist/index.html', pageTemplate(teamMembers), err => {
        if (err) {
            return console.log(err);
        } 
        console.log('wooooo')    
    })}
    createMgr();
}

buffet();

