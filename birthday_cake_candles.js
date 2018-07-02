/*

You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candle is of height  and there are  such candles.

Complete the function birthdayCakeCandles that takes your niece's age and an integer array containing height of each candle as input, and return the number of candles she can successfully blow out.

Input Format
The first line contains a single integer, , denoting the number of candles on the cake. 
The second line contains  space-separated integers, where each integer  describes the height of candle .

Output Format
Print the number of candles that can be blown out on a new line.

Sample Input 0
4
3 2 1 3

Sample Output 0
2

*/

function birthdayCakeCandles(ar) {
  ar = ar.sort((a, b) => b - a)
  let i = 0, j = 1;
  let candlesBlown = 1;
  let candlesWillBlow = true;
  while(candlesWillBlow) {
    if (j > ar.length) {
      candlesWillBlow = false;
    }
    if (ar[i] == ar[j]) {
      candlesBlown += 1;
    } else {
      return candlesBlown;
    }
    j += 1;
  }
  return candlesBlown;
}

result = birthdayCakeCandles([3, 3, 3, 3])
console.log(result)