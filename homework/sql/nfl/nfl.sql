-- 3.1- select * from teams;

-- 3.2- select stadium, head_coach from teams where conference = 'NFC';

-- 3.3- select head_coach from teams where conference = 'AFC' and division = 'South';

-- 3.4- 1532

-- 3.5- select name, head_coach from teams where conference = 'NFC' and division = 'North' or conference = 'AFC' and division = 'East';

-- 3.6- select name from players order by salary desc limit 50;

-- 3.7- select round( avg(salary)) from players;

-- 3.8- select name, position from players where salary > 10000000;