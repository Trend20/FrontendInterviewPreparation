// Check if a string is the anagram of another string.
// Ex: abba is the anagram of baab because it has the same number of characters and the same letters.
const anagrams = (string1, string2) => {
  /* call a cleanString function to clean up both 
  string of white spaces or other characaters such as ! or ? */
  const str1 = cleanString(string1);
  const str2 = cleanString(string2);

  /* if the length of string one is diffrent 
  than the length of string 2, we don't have an anagram */
  if (str1.length !== str2.length) {
    return false;
  }

  /* make both string an array, 
  sort it then join it again in a string. 
  If both string are the same we have an anagram */
  return str2.split('').sort().join('') === str1.split('').sort().join('');
};

/* helper function to clean a string 
of empty spaces or special characters */
const cleanString = str => {
  return str.replace(/[^\w]/g, '').toLowerCase();
};

console.log(anagrams('adrian ?', 'nairda !!'));