// Find the biggest number of an occurrences in an array

function NumberOfOccurances(a){
  const obj = {};

  const value = 0
  const key = ""

  // loop through the array
  for(let item of a){
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }

  for(let el of obj){
    if (obj[el] > value) {
      value = obj[el];
      key = el;
    }
  }
  return `${key}: ${value}`;
}

let testArray = ["a", "b", "c", "b", "d", "a", "c", "a"];
NumberOfOccurances(testArray);