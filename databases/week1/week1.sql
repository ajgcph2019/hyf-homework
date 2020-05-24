-- 1)Find out how many tasks are in the task table
  SELECT count(id) AS count_tasks  FROM task;

-- 2)Find out how many tasks in the task table do not have a valid due date
SELECT count(id) AS  count_tasks_with_invalid_due_date FROM task WHERE due_date IS null;

-- 3)Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id = 3;

-- 4)Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id != 3;

-- 5)Get all the tasks, sorted with the most recently created first
SELECT * from task ORDER BY created DESC ;

-- 6)Get the single most recently created task
SELECT * from task ORDER BY created DESC LIMIT  1 ;

-- 7)Get the title and due date of all tasks where the title or description contains database
SELECT title,due_date FROM task WHERE title LIKE '%database%' or description LIKE '%database%';


-- 8)Get the title and status (as text) of all tasks
SELECT title, status.name FROM task INNER JOIN status ON status.id = status_id;

-- 9)Get the name of each status, along with a count of how many tasks have that status
select status.name as status, count(task.id) 
from task
inner join status on status.id = task.status_id
group by status.id;

-- 10)Get the names of all statuses, sorted by the status with most tasks first
select status.name as status, count(task.id) 
from task
inner join status on status.id = task.status_id
group by status.id ORDER BY task.status_id DESC;
