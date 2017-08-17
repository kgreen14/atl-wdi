-- 3.1- select * from teams;

-- 3.2- select stadium, head_coach from teams where conference = 'NFC';

-- 3.3- select head_coach from teams where conference = 'AFC' and division = 'South';

-- 3.4- 1532

-- 3.5- select name, head_coach from teams where conference = 'NFC' and division = 'North' or conference = 'AFC' and division = 'East';

-- 3.6- select name from players order by salary desc limit 50;

-- 3.7- select round( avg(salary)) from players;

-- 3.8- select name, position from players where salary > 10000000;

-- 3.9- select name from players order by salary desc limit 1

-- 3.10- select name, position from players order by salary asc limit 100;

-- 3.11- select round( avg(salary)) from players where position = 'DE';

-- 3.12- select name from players where team_id = 1;

-- 3.13- select sum(salary) from players where team_id = 18;

-- 3.14- select name, salary from players where team_id = 23 order by salary asc limit 55;