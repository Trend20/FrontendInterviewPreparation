// Find the letter that occurs the most in a sentence.
// Ex: in the frase 'hey there my friend' the letter e occurs the most

const str = 'hey there my friend';

const mostFrequent = s => {
  /* decalre an helper obj */
  const obj = {};

  // get a words array out of the string
  const string = s.split(' ');

  // loop over the words
  for (let word of string) {
    //loop over each letter in every word
    for (let letter of word) {
      // assign 1 if that propriety does not exist in obj
      if (!obj[letter]) obj[letter] = 1;
      // increase by one if it exists
      else obj[letter]++;
    }
  }

  //declare 2 helper variables
  let max = 0;
  let prop = '';

  // loop over the obj
  for (let key in obj) {
    /* if the value is bigger than max (which first time is 0), 
    assign the new value to max and return that key. */
    if (obj[key] > max) {
      /* reassign max to the current value 
      in the loop if the value is bigger than max */
      max = obj[key];
      //return the key of the object for the biggest value of the max
      prop = key;
    }
  }

  return prop;
};

console.log(mostFrequent(str));