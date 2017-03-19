/**
 * Created by DaraW on 3/19/2017.
 */
function testPhone (number) {
  return /^1[3|4|5|7|8]\d{9}$/.test(number)
}

// test cases
console.log(testPhone(18812011232)) // true
console.log(testPhone(18812312)) // false
console.log(testPhone(12345678909)) //false

function testRepeat (string) {
  return string.match(/(?:^|\s)\b([A-Za-z]+)\s+\1\b(?:$|\s)/g) !== null
}

//test cases
console.log(testRepeat('foo foo bar')) // true
console.log(testRepeat('foo foo$ bar')) // false
console.log(testRepeat('$foo foo bar')) // false
console.log(testRepeat(' foo foo bar')) // true
console.log(testRepeat('foo bar foo')) // false
console.log(testRepeat('foo  barbar bar')) //false