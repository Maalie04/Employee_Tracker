INSERT INTO department (id, name)
VALUES
(111, "HR"),
(112, "Engineer"),
(113, "Perishable"),
(114, "Grocery"),
(115, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES
(11, "Receptionist", 30000.00, 111),
(12, "Engineer", 60000.00, 112),
(13, "Manager", 80000.00, 113),
(14, "Selector", 75000.00, 114),
(15, "Fork-lift", 85000.00, 113),
(16, "Accounting", 30000.00, 114);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Jamaal", "Lawson", 13, NULL),
(2, "Bryan", "Gumble", 11, 1),
(3, "Sean", "White", 12, 1),
(4, "Chris", "Brown", 14, 1),
(5, "Kevin", "Fauth", 13, NULL),
(6, "Danny", "Dimes", 15, 1),
(7, "Money", "Mitch", 16, 5);


