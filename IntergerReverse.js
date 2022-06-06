// reverse an integer and maintain the sign

function reverseInteger(int){
  let stringInt = int.toString();

  let reversedIntString = stringInt.split('').reverse().join('');

  let reversedIntVal = parseInt(reversedIntString);

  if(int < 0){
    reversedIntVal * -1;
  }
 console.log( reversedIntVal);

}

let val = -34;
reverseInteger(val);