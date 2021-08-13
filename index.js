const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');

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
            case "Update All Departments":
                updateEmp()
                break;
            case "Update All Departments":
                updateEmp()
                break;
        }
        })
    }

    init()
    
function findDepartments() {
    db.query('SELECT * FROM department', function(err,results)
    {
        console.log(results);
    });
}