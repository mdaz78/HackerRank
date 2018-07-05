/*

HackerLand University has the following grading policy:

-> Every student receives a grade in the inclusive range from 0 to 100.
-> Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
-> If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
-> If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

For example, grade=84 will be rounded to 85, but grade=29 will not be rounded because the rounding would result in a number that is less than 40.

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process. Complete the function solve that takes an integer array of all grades, and return an integer array consisting of the rounded grades. For each grade, round it according to the rules above and print the result on a new line.

Input Format
The first line contains a single integer denoting  (the number of students). 
Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.

Output Format
For each  of the  grades, print the rounded grade on a new line.

Sample Input 0
4
73
67
38
33
Sample Output 0
75
67
40
33

*/

function gradingStudents(grades) {
  let result = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i])
    } else {
      let multiple = Math.floor(grades[i] / 5);
      let grade_to_compare = 5 * (multiple + 1);
      if ((grade_to_compare - grades[i]) < 3) {
        result.push(grade_to_compare)
      } else {
        result.push(grades[i])
      }
    }
  }
  return result;
}

console.log(gradingStudents([73, 67, 38, 33]))