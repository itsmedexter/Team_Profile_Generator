const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
      super(name, id, email);
      this.github = gitHubUser;
      this.role = "Engineer";
    }

    getGithub() {
      return this.github;
    }
  }
  

  module.exports = Engineer;