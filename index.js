import Employee from "./lib/Employee.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from 'inquirer';
import * as path from 'path';
import * as fs from 'fs'


const OUTPUT_DIR = path.resolve('./', "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

/*-------------Declaration of global variable---------------------*/
let employeesArr = []; // an empty array to store employee objects
/*----------------------------------------------------------------*/

/* ------------functions to valiate inquirer input----------------*/
const validateName = (name) => {
    const letterAndSpace = /^[A-Za-z\s]*$/;
    // return true if name is not empty and contains letters only
   return name.trim().match(letterAndSpace) ? true : 'Please input a valid name!';
}

const validateNum = (num) => {
    return num.match((/^[0-9]+$/)) ? true : 'Please enter a valid number!';
}

const validateEmail = (email) => {
    //Ref: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailRegex) ? true : 'Please input a valid email address!'
}

// Ref: https://gist.github.com/aslamdoctor/6620085
const valiateGithub = (userName) => {
    let illegalChars = /\W/; // allow letters, numbers, and underscores
    if (userName === '') {
        return ('Please enter a valid username!');
    } else if (userName.length < 5 || userName.length > 15) {
        return ('Username must have 5-15 characters!');
    } else if (illegalChars.test(userName)) {
        return ('Please enter valid Username. Use only numbers and alphabets!')
    } else {
        return true;
    }
}
/*--------------------------------------------------------------*/

/*--------Functions to create employee objects------------------*/

// function to create manager object and push it to employee array
const createManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message:"The manager's name: ",
            name: 'name',
            validate: validateName
        },
        {
            type: 'input',
            message: "The manager's Id number: ",
            name: 'id',
            validate: validateNum
        },
        {
            type: 'input',
            message:"The manager's email address: ",
            name: 'email',
            validate: validateEmail
        },
        {
            type: 'input',
            message:"The manager's office number: ",
            name: 'office',
            validate: validateNum
        }
    ])
    .then((info) =>{
        const {name, id, email, office} = info;
        // create the manager object
        const manager = new Manager(name, id, email, office);
        // push the manager to the employee array
        employeesArr.push(manager);
        teamEditMenu();
        }
    )
}

// functions to get engineer info and push the engineer object to employee array
const createEngineer = (info) => {
    const {name, id, email, github} = info;
    const engineer = new Engineer(name, id, email, github);
    employeesArr.push(engineer);
}

const getEngineerInfo = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message:"The engineer's name: ",
            name: 'name',
            validate: validateName
        },
        {
            type: 'input',
            message: "The engineer's Id number: ",
            name: 'id',
            validate: validateNum
        },
        {
            type: 'input',
            message:"The engineer's email address: ",
            name: 'email',
            validate: validateEmail
        },
        {
            type: 'input',
            message:"The engineer's github username: ",
            name: 'github',
            validate: valiateGithub
        }
    ])
    .then((info) => {
        createEngineer(info);
        teamEditMenu();
    })
}

// functions to get Intern info and push the Intern object to employee array
const createIntern = (info) => {
    const { name, id, email, school } = info;
    const intern = new Intern(name, id, email, school);
    employeesArr.push(intern);
}

const getInternInfo = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message:"The Intern's name: ",
            name: 'name',
            validate: validateName
        },
        {
            type: 'input',
            message: "The Intern's Id number: ",
            name: 'id',
            validate: validateNum
        },
        {
            type: 'input',
            message:"The Intern's email address: ",
            name: 'email',
            validate: validateEmail
        },
        {
            type: 'input',
            message:"The Intern's school: ",
            name: 'school',
        }
    ])
    .then((info) => {
        createIntern(info);
        teamEditMenu();
    })
}

// funtion to show team editing menu
const teamEditMenu = () => {
    inquirer.
    prompt([
    {
        type: 'list',
        message:'What to do next?',
        name: 'choice',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }
    ])
    .then((response) => {
        if (response.choice === 'Add an engineer') {
            getEngineerInfo();
        } else if (response.choice === 'Add an intern') {
            getInternInfo();
        } else {
            console.log('Finish team build');
            const teamInfo = render(employeesArr);
            completeTeam(teamInfo);
        }
    })
}

/*--------------------------------------------------------*/

/*-----------Write employee info to html file----------*/
const completeTeam = (teamInfo) => {
    // create the output folder if the folder doesn't exist
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir((OUTPUT_DIR), (err) => {
            if (err) {
                return console.error(err);
            }
        })
    }
    // write the data to the html file
    fs.writeFile(outputPath, teamInfo, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('The team page has been created.');
        }
    })
}
/*---------------------------------------------------------*/

/*----------------Application initialization---------------*/
const init = () => {
    createManager();
}

init();
/*---------------------------------------------------------*/