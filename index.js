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

/* ------------functions to valiate inquirer input---------------- */
const validateName = (name) => {
    const letterAndSpace = /^[A-Za-z\s]*$/;
    // return true if name is not empty and contains letters only
   return name.trim().match(letterAndSpace) ? true : 'Please input a valid name!';
}
const validateId = (id) => {
    return Number.isInteger(id) ? true : 'Please enter a valid ID number!';
}

const validateEmail = (email) => {
    //Ref: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailRegex) ? true : 'Please input a valid name!'
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
/*---------------------------------------------------------------------------------------*/

/*----------------------Functions to get employees' info and create objects------------------------*/

const createManager = () => {
    inquirer
    .prompt([
    {
        type: 'input',
        message:"What's the name of the team manager?",
        name: 'managerName',
        validate: validateName
    },
    {
        type: 'input',
        message: `What's the id of the manager?`,
        name: 'managerID',
        validate: validateId
    },
    {
        type: 'input',
        message:"What's the email address of the team manager?",
        name: 'managerEmail',
        validate: validateEmail
    },
    {
        
    }
    
])
    .then((response) =>{
        console.log(response)
        }
    )
}




