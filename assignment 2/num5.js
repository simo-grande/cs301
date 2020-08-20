let prompt = require('prompt-sync')();
let totalStudents = prompt('Total number of students : ');
let totalTeams = prompt('Number of teams : ');
let studTeams= parseFloat(Math.floor(totalStudents/totalTeams));
let remStud= parseFloat(totalStudents%totalTeams);
let remTeams= parseFloat(totalTeams-remStud);
let ext= studTeams+1


console.log(remStud +  " teames of "+ ext+ " members and " + remTeams + " teames with " + studTeams +" members");
