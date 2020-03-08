const class07Students = ['Anna','Evan','Nobin','Anju'];
function addStudentToClass(studentName) {

    //Checking for conditions - if empty string passed or if array is empty with length property
    if (class07Students === undefined || class07Students.length == 0) {
        console.log("You cannot add an empty string to a class");
    }
   
    //if the Queen is added to the class she should always get a space. Even if the class has been filled out.
    else if(studentName =="Queen" && class07Students.length >= 6) {
        class07Students.push(studentName); 
        console.log("Added Queen") ;
        
    }

    //The same person cannot be added to the class.
    else  if (class07Students.includes(studentName)) {
                console.log("Student " + studentName + " already present in class") ;
    }

    else if ( class07Students.length >= 6) {
                console.log("Cannot add more than 6 students to class except Queen");
            }

    else {
                class07Students.push (studentName);
        }
    }

function getNumberOfStudents() {
        return class07Students.length ;
}

//Add some students to the class.
addStudentToClass('Ivy');
addStudentToClass('John');

//Add more students than there is space for
addStudentToClass('Becky');

//Add the Queen to a full class
addStudentToClass('Queen');

//Add a student that is already in the class
addStudentToClass('Anju');


const numberOfStudents = getNumberOfStudents();
console.log("Number of students " + numberOfStudents);
console.log(class07Students);