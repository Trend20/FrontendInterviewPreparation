// reverse s string without using the reverse() method.

function reverseString(str){
  let reversedString = "";

  let arrayToBeReversed = str.split('');

  for(let item of arrayToBeReversed){
    reversedString = item + reversedString;
  }

  console.log(reversedString);
}

let myName = "Billing";
reverseString(myName);


// using the reverse() method
function reverseString(str){
  console.log(str.split(''.reverse().join('')));
}