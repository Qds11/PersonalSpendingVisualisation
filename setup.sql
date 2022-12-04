drop database if exists BudgetTracking;

create database BudgetTracking;
use BudgetTracking;

CREATE TABLE IF NOT EXISTS spending (
date DATE NOT NULL,
spendAmt DECIMAL(19,2) NOT NULL,
PRIMARY KEY(date)
);

INSERT INTO spending (date, spendAmt) VALUES
('2022-08-02', '905.50'),
('2022-09-06', '12.50'),
('2022-09-15', '495.50'),
('2022-09-21', '535.50'),
('2022-10-01', '456.50'),
('2022-10-15', '67.50'),
('2022-10-22', '21.50'),
('2022-11-11', '52.34'),
('2022-11-21', '45.50'),
('2022-11-26', '15.50');
