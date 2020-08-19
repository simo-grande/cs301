let prompt = require('prompt-sync')();
let totalStudents = prompt('Total number of students : ');
let totalTeams = prompt('Number of teams : ');
let studTeams= parseFloat(totalStudents/totalTeams);
let remStud= parseFloat(totalStudents%totalTeams);
let remTeams= parseFloat(totalTeams-remStud);

console.log(Math.round(studTeams)+" teams with "+Math.ceil(studTeams)+" members and "+(remTeams)+" teams with "+Math.round(studTeams)+" members.");
