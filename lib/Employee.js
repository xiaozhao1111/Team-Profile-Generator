// TODO: Write code to define and export the Employee class
class Employee {
    //set the name, id and email when create a new Employee class object
    constructor(name, id, email) {
        this.name = name;
        this.id =id;
        this.email = email;
    }

    // functions to get the employee's name, id, email and role
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;