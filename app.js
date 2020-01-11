// dependency for inquirer npm package
var inquirer = require("inquirer");
const {Manager, Intern, Engineer} = require('./lib');
// constructor function for creating employee objects
function Employee(manager, engineer, intern) {
  this.manager = manager;
  this.engineer = engineer;
  this.intern = intern;
  

// arrays used to contain all of our employee objects
var manager = [];
var engineer = [];
var intern = [];

var team = {
  manager: null,
  members:[]
}

var createTeam = function() {

    console.log("\nPlease build your team\n");
    inquirer.prompt([
      {
        name: "name",
        message: "What is your manager's name?: "
      }, {
        name: "managerId",
        message: "What is your manager's id: "
      }, {
        name: "managerEmail",
        message: "What is your manager's email?: ",
      }, {
        name: "managerOffice",
        message: "What is your manager's number?: "
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var manager = new Manager(answers.name, parseInt(answers.managerId), answers.managerEmail, parseInt(answers.managerOffice));

      team.manager = manager//Going forward any new team member team.members.push()
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
  }
};

// calls the function createEmploye() to start the code
createEmployee();
