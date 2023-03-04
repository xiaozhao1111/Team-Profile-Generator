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

inquirer
.prompt([
    {
        type: "input",
        message:"What's the name of the team manager?",
        name: 'managerName',
        validate: (input) => {
            if(input.trim()) {
                return true;
            } else {
                return 'Please input a valid name!'
            }
        }

    }
])