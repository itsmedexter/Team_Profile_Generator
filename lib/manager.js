const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
      super(name, id, email);
      this.officeNumber = OfficeNumber;
      this.role = 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
  }

  module.exports = Manager;
  

  