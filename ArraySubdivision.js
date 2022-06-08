// Chunk an array in an array with other arrays as elements, at a given size.
// Ex [1,2,3,4,5,6,7,8,9] at size 2 = [[1,2], [3,4], [5,6], [7,8], [9]]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function chunk(array, size) {
  //declare an empty helper array
  const chunk = [];

  //loop trough the recieved array
  for (let el of array) {
    //get the last elemnt from the helper array (which is empty at this point, so no last element)
    const last = chunk[chunk.length - 1];

    /* if no last element and the length
     of the last element (which will be an array soon),
      is equal to the size,push an array 
      into chunk array with the first element into it */
    if (!last || last.length === size) {
      // the first loop will run this bit
      chunk.push([el]);
    } else {
      /* the second loop will run this 
      loop because there is a last element 
      and the length of the last elemet is not equal
       to the size. Zise else condition will push
        a new element into the last array. 
        This will go on until the length of the 
        last will be equal to the size. 
        When the size will be equal to the 
        last length, the first loop condition 
        will run and a new array with one elemnt 
        into it will be pushed into chunk. 
        so until the end of the loop. */
      last.push(el);
    }
  }
  // return the chunk array
  return chunk;
}

console.log(chunk(arr, 3));