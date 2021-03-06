-- 1. SELECT matchid, player FROM goal WHERE teamid = 'GER'
-- 2. SELECT id,stadium,team1,team2 FROM game WHERE id = 1012
-- 3. SELECT player, teamid, stadium, mdate FROM game JOIN goal ON (game.id=goal.matchid) WHERE teamid = 'GER'
-- 4. SELECT team1, team2, player FROM game JOIN goal ON (game.id=goal.matchid) WHERE player LIKE 'Mario%'
-- 5. SELECT player, teamid, coach, gtime FROM goal JOIN eteam ON teamid=id WHERE gtime<=10
-- 6. SELECT mdate, teamname FROM game JOIN eteam ON (game.team1 = eteam.id) WHERE coach = 'Fernando Santos'
-- 7. SELECT player FROM goal JOIN game ON (goal.matchid = game.id) WHERE stadium = 'National Stadium, Warsaw'
-- 8. SELECT DISTINCT player FROM game JOIN goal ON goal.matchid = game.id WHERE (team1 = 'GER' OR team2 = 'GER') AND teamid <> 'GER'
-- 9. SELECT teamname, COUNT(player) goals_scored FROM eteam JOIN goal ON eteam.id = goal.teamid GROUP BY teamname
-- 10. SELECT stadium, COUNT(player) goals_scored FROM game JOIN goal ON game.id = goal.matchid GROUP BY stadium
-- 11. SELECT game.id, game.mdate, COUNT(*) FROM game JOIN goal ON game.id = goal.matchid WHERE (game.team1 = 'POL' OR game.team2 = 'POL') GROUP BY game.id, game.mdate ORDER BY game.id;
-- 12. 
-- 13. 