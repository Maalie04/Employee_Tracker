//install inquirer, mysql, and table packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
//
const managerArray = [];
const roleArray = [];
//connect to mysql server and sql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empTrack_db'
},
    console.log('Connected to the empTrack_db.')
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
                "Add Department",
                "Exit"
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
            case "Update Employee":
                updateEmp()
                break;
            case "Add Employee":
                addEmp()
                break;
            case "Add Role":
                addRole()
                break;
            case "Add Department":
                addDepartment()
                break;
            case "Exit":
                db.end();
        }
    })
}

function findEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        init()
    });
}

function findRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        init()
    });
}

function findDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init()
    });
}

function addDepartment() {

    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "Enter department name: "
        }
    ]).then(function (data) {
        db.query('INSERT INTO department SET ?',
            {
                name: data.department,
            },
            function (err) {
                console.table(data)
                init()
            });
    })
}

function  addEmp() {
    console.log("show me something")
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "First Name: "
        },
        {
            name: "last_name",
            type: "input",
            message: "Last Name: "
        },
        {
            name: "role",
            type: "list",
            message: "add role",
            //runs choiceRole function, which will return all the roles in the array
            choices: choiceRole()
        },
        {
            name: "manager",
            type: "list",
            message: "Who is the manager? ",
            //runs choiceManager function, which will return all the managers in the array
            choices: choiceManager()
        }
    ]).then(function (data) {

        var roleId = choiceRole().indexOf(data.role) + 1
        var managerId = choiceManager().indexOf(data.manager) + 1

        db.query('INSERT INTO employee ?',
            {
                first_name: data.first_name,
                last_name: data.last_name,
                manager_id: managerId,
                role_id: roleId
            }, function (err) {
                console.table(data)
                init()
            });
    })

}


function addRole() {
    db.query('SELECT role.title AS selTitle, role.salary AS selSalary FROM role', function (err, results) {
        inquirer.prompt([
            {
                name: "selTitle",
                type: "input",
                message: "Enter the role: "
            },
            {
                name: "selSalary",
                type: "input",
                message: "Enter the salary: "
            }
        ]).then(function (results) {
            db.query("INSERT INTO role SET ?",
                {
                    title: results.selTitle,
                    salary: results.selSalary,
                },
                function (err) {
                    console.table(results)
                    init()
                });
            
        })
    })

}
function updateEmp() {
    db.query('SELECT * employee.last_name, role.title FROM employee JOIN role ON employee.role_id;', function (err, results) {
        inquirer.prompt([
            {
                type: "list",
                name: "updateEmp",
                choices: function () {
                    var empId = [];
                    for (var i = 0; i < results.length; i++) {
                        empId.push(results[i].empId)
                    }
                    return empId;
                },
                message: "Select employee to update",
            },
            {
                name: "role",
                type: "list",
                message: "What is the employees role",
                choice: choiceRole()
            },
        ]).then(function (data) {

            var roleId = choiceRole().indexOf(data.role) + 1
            db.query('Update employee SET ?', {
                id: data.updateEmp,
                role_id: data.roleId
            },

                function (err) {
                    console.table(err)
                    init()
                });

        })
    })
}

function choiceRole() {
    db.query('SELECT title FROM role', function (err, results) {
        for (var i = 0; i < results.length; i++) {
            roleArray.push(results[i].title);
        }
    })
    return roleArray;
}

function choiceManager() {
    db.query('SELECT first_name, last_name FROM employee WHERE manager_id IS NULL', function (err, results) {
        for (var i = 0; i < results.length; i++) {
            managerArray.push(results[i].first_name);
        }
    })
    return managerArray;
}

init()