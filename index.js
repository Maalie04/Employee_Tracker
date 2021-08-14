const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
const managerArray = [];
const roleArray = [];

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tracker_db'
},
    console.log('Connected to the tracker_db.')
)

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Update Employee",
                "Add Employee",
                "Add Role",
                "Add Department"
            ]
        }
    ]).then(function (tracker) {
        switch (tracker.choice) {
            case "View All Departments":
                findDepartments()
                break;
            case "View All Roles":
                findRoles()
                break;
            case "View All Employees":
                findEmployees()
                break;
            case "Update employee":
                updateEmp()
                break;
            case "add employee":
                addEmp()
                break;
            case "add role":
                addRole()
                break;
            case "add Department":
                addDepartment()
                break;
        }
    })
}

init()

function findEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
}

function findRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
}

function findDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function addDepartment(){
db.query('SELECT role.title AS selectedTitle, role.salary AS '), function (err,results) {
    inquirer.prompt([
        {

        }
    ])
}
}

function addEmp(){
    db.query('SELECT role.title AS selectedTitle, role.salary AS selectedSalary,'), function (err,results) {
        inquirer.prompt([
            {
                name: "role",
                type: "list",
                message: "Select role....",
                choices: 
            }
        ])
    }
}

function addRole(){
db.query('SELECT role.title AS selectedTitle, role.salary AS '), function (err,results) {
    inquirer.prompt([
        {
            
        }
    ])
}
}
function updateEmp() {
    db.query('SELECT * FROM employees'), function (err, results) {
        inquirer.prompt([
            {
                type: "list",
                name: "updateEmp",
                choices: function () {
                    var empId = [];
                    for (var i = 0; i < results.length; i++) {
                        empId.push(results[i].empId)
                    }
                }
            }
        ])
    }
}

function choiceRole(){
    db.query('SELECT + FROM role',function (err,results){
        for (var i = 0; i < results.length; i++){

        }
    }
}