// Q1. What are conditional statement?Explain conditional Statement with syntax and examples.
// ans. Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.
//     There are several methods that can be used to perform Conditional Statements in JavaScript.

// if Statement :-
// let num = 20; 
// if (num % 2 === 0) { 
//     console.log("Given number is even number."); 
// } 
// if (num % 2 !== 0) { 
//     console.log("Given number is odd number."); 
// };
// if-else Statement:-
// let age = 25; 
// if (age >= 18) { 
//     console.log("You are eligible of driving licence") 
// } else { 
//     console.log("You are not eligible for driving licence") 
// };
// else if Statement:-
// const num = 0; 

// if (num > 0) { 
// 	console.log("Given number is positive."); 
// } else if (num < 0) { 
// 	console.log("Given number is negative."); 
// } else { 
// 	console.log("Given number is zero."); 
// };

// switch Statement:-
// const marks = 85; 
// let Branch; 
// switch (true) { 
// 	case marks >= 90: 
// 		Branch = "Computer science"; 
// 		break; 
// 	case marks >= 80: 
// 		Branch = "Math"; 
// 		break; 
// 	case marks >= 70: 
// 		Branch = "Biology"; 
// 		break; 
// 	case marks >= 50: 
// 		Branch = "English"; 
// 		break; 
// 	default: 
// 		Branch = "Chemistry"; 
// 		break; 
// } 

// console.log(`Student Branch name is : ${Branch}`);


// Q2. Write a program that grades students based on their marks.
// ans.
//      const marks = 80;
//     if (marks > 90){
//         console.log("A Grade");
//     }else if(marks > 70 && marks < 90){
//         console.log("B Grade");
//     }else if(marks > 50 && marks < 70){
//         console.log("C Grade");
//     }else if(marks <50){
//         console.log("Fail");
//     }
//     else{
//         console.log("Invalid");
//     }


// Q3. What are loops,and what do we need them?Explain different types of loops with their syntax and examples.
// ans. The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.

// There are three types of loops in JavaScript.

// for loop:-
// for (i=1; i<=5; i++)  
// {  
// console.log("Hello javascript "+i);  
// }  
// while loop:-
// var i=1;  
// while (i<=5)  
// {  
// console.log(i + "hello");  
// i++;  
// }  
// do-while loop:-
// var i=5;  
// do{  
// console.log(i + " javascript");  
// i++;  
// }while (i<=10);  

// Q4. Generate numbers between any 2 given numbers.
// ans.
function GenerateNumbers(start,end){
    let result=[];

    for(let i = start + 1; i < end; i++){
        result.push(i);
    }
    return result;
} 
let numbersBetween10And25 = GenerateNumbers(10,25)
console.log(numbersBetween10And25);



// Q5. use the while loop to print numbers from 1 to 25 in ascending and descending order.
// ans.
// ascending order 
// let i=1;  
// while (i<=25)  
// {  
// console.log(i + " hello");  
// i++;  
// }

// Descending order
// let i=25;  
// while (i>=1)  
// {  
// console.log(i + " hello");  
// i--;  
// }   