// dependency for inquirer npm package
const inquirer = require("inquirer");
const convertFactory = require('electron-html-to');

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

      var manager = new Manager(answers.name, parseInt(answers.managerId), answers.managerEmail, parseInt(answers.managerOffice));
            // team.manager = manager
      //Going forward any new team member team.members.push()?
      
      // document.onkeydown = checkKey;
// function to pick engineer, intern, or none
      function pickEmployee() {      
          if (e.keyCode === '38') {
            // up arrow key Engineer
            inquirer.prompt([
              {
                name: "name",
                message: "What is your engineer's name?: "
              }, {
                name: "engineerId",
                message: "What is your engineer's id: "
              }, {
                name: "engineerEmail",
                message: "What is your engineer's email?: ",
              }, {
                name: "engineerOffice",
                message: "What is your engineer's GitHub username?: "
              }
            ]).then(function(answers) {
        
              var engineer = new Engineer(answers.name, parseInt(answers.engineerId), answers.engineerEmail, parseInt(answers.engineerGitHubUser));
          });
        }
          if (e.keyCode == '40') {// down arrow key Intern
            inquirer.prompt([
              {
                name: "name",
                message: "What is your intern's name?: "
              }, {
                name: "internId",
                message: "What is your intern's id: "
              }, {
                name: "internEmail",
                message: "What is your intern's email?: ",
              }, {
                name: "internSchool",
                message: "What is your intern's school?: "
              }
            ]).then(function(answers) {
        
              var intern = new intern(answers.name, parseInt(answers.internId), answers.internEmail, parseInt(answers.internSchool));
          });
        }
      
          {
        
      
          if {//I don't want to add anymore,
          // print to html?
        //   var html = generateHtml(res.data);
        // console.log(html);
        // writeToFile(html);
        // return html
        });
      }
    }


// calls the function createEmploye() to start the code
createEmployee();
