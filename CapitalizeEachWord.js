// Capitalize each word in a sentence.
// Ex: 'hey there my friend' = 'Hey There My Friend'
const str = 'hey there my friend';

const capitalize = s => {
  //decalre an helper array
  const words = [];
  // get an array from the sentence
  const frase = s.split(' ');

  //loop over the array
  for (let word of frase) {
    /* push the first letter of each world capitalize
     plus the rest of the word to the words array */
    words.push(word[0].toLocaleUpperCase() + word.slice(1));
  }

  // return the words array joined back to a string by the empty spaces
  return words.join(' ');
};

console.log(capitalize(str));