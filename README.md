# Team-Profile-Generator

## Description 
In this project, we will work on the given starter code and convert it into a working Node.js command-line application. This application will take information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## User Story
As a manager, a user want to generate a webpage to display the basic info of the team members.

## Introductions
Create a command-line application that accepts accepts user input using the provided starter code.
* Create classes for each team member provided and export them. The tests for these classes(in the `_tests_` folder) must all pass.
    * The `Employee` class is a parent class with following properties and methods: `name`, `id`, `email`, `getName()`, `getId()`, `getEmail()`, `getRole()` (return `'Employee'`).
    * The other three classes (`Manager`, `Engineer`, `Intern`) will extend `Employee`.
    * The `Manager` will have additonal properties and methods: `officeNumber`, `getRole()` (overridden to return `'Manager'`)
    * The `Engineer` will have additonal properties and methods:The `github` (GitHub username), `getGithub()`, `getRole()` (overridden to return `'Engineer'`).
    * The `Intern` will have additonal properties and methods:The `school`, `getSchool()`, `getRole()` (overridden to return `'Intern'`).
    * Add validation to ensure that user input is in the proper format

* In `index.js`, uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then he/she is pormoted to enter the **team manager**'s `Name`, `Employee ID`, `Email address` and `Office number`.
    * When the user completes the input, then the user is presented with a menu with the option to:
        * Add an engineer
        * Add an intern
        * Finish building the team
    * When a user chooses the `Addd an engineer`, the user is prompted to enter the info of an engineer inclduing `name`, `Employee ID`, `Email address` and `GitHub username`. Finally, the user will be taken back to the menu.
    * When a user chooses the `Addd an intern`, the user is prompted to enter the info of a intern inclduing `name`, `Employee ID`, `Email address` and `School`. Finally, the user will be taken back to the menu.
    * When a user decides to building their team then they exit the application, and the HTML is generated.

* Call the `render` function (in the starter code) and pass in an array containing all employee objects. Then, a block of HTML including templated divs for each employee will be generated.

* Create an HTML file with using `render` function
    * Write the block of HTML to a file named `team.html` in the `output` folder.
    * Use the provided varaible `outputPath` to target the location.

## Usage
Node.js is needed to run this application. The application will be invoked by using the following command:
`node index.js`

## Screenshot
Here is a screenshot of the webpage generated with the command-line application.

![Screenshot](./output/Screenshot%20.png)

## Contribution 
Feel free to contribute with the git workflow. Please follow the [contributing guide](https://github.com/github/docs/blob/main/CONTRIBUTING.md).

## License
No license used for this application.

