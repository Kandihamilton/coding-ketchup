const age = 49;
let name = `Kandi Hamilton is ${age} years old`;
console.log(name);

let username = "Tommy123";
let password = "12345";

if ((username == "Tommy123" && password == "12345") || (username == "Timmy456" && password == "6789")) {
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied");
}

let studentClass;
let studentGrade = 13;

if (studentGrade >= 0 && studentGrade <= 6) {
    studentClass = "Elementary"
} else if (studentGrade == 7 || studentGrade == 8) {
    studentClass = "Middle"
} else if (studentGrade == 9) {
    studentClass = "Freshman"
} else if (studentGrade == 10) {
    studentClass = "Sophomore" 
} else if (studentGrade == 11) {
    studentClass = "Junior"
} else if (studentGrade == 12) {
    studentClass = "Senior"
} else if (studentGrade > 12) {
    console.log("Error");
}
console.log(studentClass);

// 7. For-loop:  Write a for loop that will iterate backwards from 10 to -10

for (let i = 10; i > -11; i--) {
    console.log(i);
}
// 8. Do/While loop:  Write a do/while loop that prints 1 through 50
let counter = 1;

//do {
//        console.log(counter);
 //   }   
//counter++
//} while (counter <= 50);

// 9. Modified Do/While loop: 
//			a. edit the previous do/while loop so that it prints the remainder 
//					when the loop number is divided by 4

do {
    if (counter % 4 == 0) {
        console.log(counter);
    }
    counter++
} while(counter <= 50);

// 10:  Troubleshooting/Debugging:
//			a. Someone messed up the following for loop
//					fix the following infinite loop, uncomment to test
//   /* 
//    for(let i = 11; i > 10; i++){
//        console.log(i);
//    } 
//   */

for(let i = 0; i < 10; i++) {
    console.log(i);
}

