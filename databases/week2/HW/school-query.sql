-- Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)
USE hyf_school;

CREATE TABLE `class` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

insert into class (id, name, begins, ends) values (11, 'hyf-class1', '2019-08-15', '2020-04-29');
insert into class (id, name, begins, ends) values (12, 'hyf-class2', '2019-10-13', '2020-06-28');
insert into class (id, name, begins, ends) values (13, 'hyf-class3',  '2020-01-26', '2020-09-14');
insert into class (id, name, begins, ends) values (14, 'hyf-class4', '2020-04-10', '2020-12-15');

CREATE TABLE `student` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int unsigned,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
);
insert into student (id, name, email, phone, class_id) values (1, 'Victoria Kush', 'victoria.v.kush@gmail.com', '483-396-8795', '13');
insert into student (id, name, email, phone, class_id) values (2, 'Fauzia Siddique', 'fauzia.siddique1@spotify.com', '635-572-8467', '11');
insert into student (id, name, email, phone, class_id) values (3, 'Yuka Fukuzawa', 'yuka.fukuzawa@lulu.com', '790-962-8683', '13');
insert into student (id, name, email, phone, class_id) values (4, 'Deepthi Dukka', 'deepthi.dukka@quantcast.com', '646-743-6191', '12');
insert into student (id, name, email, phone, class_id) values (5, 'Lucy Chyzhova ', 'lucy.chyzhova @indiatimes.com', '302-678-7931', '11');
-- Create an index on the name column of the student table.
CREATE INDEX `student_name` 
ON `student` (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;