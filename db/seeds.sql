INSERT INTO department (id, name)
VALUES
(111, "Intern"),
(112, "Engineer"),
(113, "Manager"),
(114, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES
(11, "Intern", 30000.00, 111),
(12, "Engineer", 60000.00, 112),
(13, "Manager", 80000.00, 113),
(14, "Sales", 30000.00, 114);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Jamaal", "Lawson", 13, NULL),
(2, "Bryan", "Gumble", 11, 1),
(3, "Sean", "White", 12, 1),
(4, "Chris", "Brown", 14, 1);

