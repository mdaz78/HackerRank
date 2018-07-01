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