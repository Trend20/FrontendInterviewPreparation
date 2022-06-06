/* 
A string is called a palindrome string if 
the reverse of that string is the same as the original string.
*/
function stringPalindrome(str){
  //  let reversedString = str.split('').reverse().join('');
  let myReversedString = "";

  let myArrayString = str.split('');
  // loop through the array
  for(let item of myArrayString){
    myReversedString = item + myReversedString;
  }

   if(str === myReversedString){
     console.log('String is a palindrome!');
   }else{
     console.log('String is not a palindrome!');
   }
}

let myString = "cook"
stringPalindrome(myString);
