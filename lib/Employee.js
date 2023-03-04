// TODO: Write code to define and export the Employee class
class Employee {
    //set the name, id and email when create a new Employee class object
    constructor(name, id, email) {
        this.name = name;
        this.id =id;
        this.email = email;
    }

    // function to get the employee's name
    getName() {
        return this.name;
    }

    
}

module.exports = Employee;