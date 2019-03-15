// function checkSum(data){
//   return data.map(array => {
//     return(Math.max(array) - Math.min(array))
//   })
// .reduce((total, int) => int + total)
//   }


checkSum = (d) => d.map(array =>(Math.max(...array) - Math.min(...array))).reduce((total, int) => int + total)
var testData = [
  
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

console.log(checkSum(testData))
