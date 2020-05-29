-- Part 1: Working with tasks
-- Write the following sql queries:

-- 1)Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title,  description, created, updated, due_date, status_id ) 
VALUES ('Submit Database week2 homework', 'Title says it all', '2017-10-02 08:23:34', '2017-10-02 09:23:34', '2017-10-04 08:23:34', 2 );

-- 2)Change the title of a task
UPDATE task SET title = 'Wash the bike'  where id = 7 ;

-- 3)Change a task due date
UPDATE task SET due_date = '2017-10-02 08:23:34'  where id = 7 ;

-- 4)Change a task status
UPDATE task SET status_id = 1 where id = 36;

-- 5)Mark a task as complete
UPDATE task SET status_id = 3 where id = 36;

-- 6)Delete a task
delete from task where id = 36 ;