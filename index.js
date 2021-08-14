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
        inquirer.prompt([
            {
                name: "role",
                type: "list",
                message: "Select role....",
                choices: choiceRole(),
            }
        ]).then(function(data) {
            var roleId = choiceRole().indexOf(data.role) + 1;
            var managerId = choiceRole().indexOf(data.manager) + 1;
            db.query('INSERT INTO employee SET ?', function (err,results) {
                first_name: data.first_name;
                last_name: data.last_name;
                manager_id: managerId;
                role_id: roleId
        },
        function(err){
            console.table(data)
            init()
        })
        
})
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
    db.query('SELECT title FROM role',function (err,results){
        for (var i = 0; i < results.length; i++){
roleArray.push(results[i].title);
        }
    })
    return roleArray;
}

function choiceManager(){
    db.query('SELECT first_name FROM employee WHERE  manager_Id IS NULL',function (err,results){
        for (var i = 0; i < results.length; i++){
managerArray.push(results[i].first_name);
        }
    })
    return managerArray;
}

