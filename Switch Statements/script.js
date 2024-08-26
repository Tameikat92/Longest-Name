document.write(`Grades`)


/*
90-100:A
80-89: B
70-79: C
60-69: D
0-59:F
*/

function calculateGrade(grade){

    if(grade > 89 && grade < 101) {
        return "You've got an A great job";
    } else if(grade > 79 && grade < 90){
        return "You've got an B great job";
    } else if (grade > 69 && grade < 80) {
        return "You've got an C great job";
    } else if(grade > 59 && grade < 70) {
        return "You've got an D ";
    } else if(grade >=0 && grade < 60) {
        return "You didn't pass. F ";
    }
    else {
       return  "You've failed";
    }
}
console.log(calculateGrade)