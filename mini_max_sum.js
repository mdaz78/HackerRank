/*

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format
A single line of five space-separated integers.

Constraints
Each integer is in the inclusive range .

Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input
1 2 3 4 5

Sample Output
10 14

*/ 
function miniMaxSum(arr) {
  let result = []
  let i = 0;
  let k = 0;
  while (i < 5) {
    let step = 0
    let list = []
    while (step != 4) {
      if (k >= arr.length) {
        k = k % arr.length
      }
      list.push(arr[k])
      k++;
      step++;
    }
    list = list.reduce((a, sum) => sum = sum + a)
    result.push(list)
    i++;
  }
  console.log(Math.min(...result), Math.max(...result))
}

miniMaxSum([1, 2, 3, 4, 5])