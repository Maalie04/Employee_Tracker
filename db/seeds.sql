INSERT INTO department (id, name)
VALUES
(1, "Intern"),
(2, "Engineer")
(3, "Manager")
(4, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES
(11, "Intern", 30.000, 1),
(12, "Engineer", 60.000, 2),
(13, "Manager", 80.000, 3),
(14, "Sales", 30.000, 4),

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(111, "Jamaal", "Lawson", 3, NULL),
(112, "Bryan", "Gumble", 1, 111,
(113, "Sean", "White", 2, 111),
(114, "Chris", "Brown", )4