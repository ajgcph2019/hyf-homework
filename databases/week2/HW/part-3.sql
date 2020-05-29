-- Part 3
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.title 
FROM user_task ut 
INNER JOIN task t ON ut.task_id=t.id 
WHERE ut.user_id = (
    SELECT id
    FROM user 
    WHERE email LIKE '%@spotify.com'
);

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.title
FROM task t
INNER JOIN user_task ut ON t.id = ut.task_id
WHERE ut.user_id = (
    SELECT id 
    FROM user
    WHERE name = 'Donald Duck'
)
AND t.status_id = (
    SELECT id
    from status
    WHERE name = 'Not started'
); 

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select t.title from task t
inner join user_task ut ON t.id = ut.task_id
WHERE ut.user_id = 
(select id from user where name = 'Maryrose Meadows') AND month(created) = 09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select month(created),count(*) from task group by month(created);