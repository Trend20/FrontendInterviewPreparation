// finding out how many times a number is included in a bigger number.
// In other words if a number is a multiple of another number.

function FizzBuzz(num){
  for(let i = 1; i <= num; i++ ){
    if(i % 5 === 0 && i % 4 === 0){
      console.log('FizzBuzz');
    }else if(i % 5 === 0){
      console.log('Fizz')
    }else if(i % 4 === 0){
      console.log('Buzz')
    }else{
      console.log('No fizz buzz')
    }
  }
}
let n = 200;
FizzBuzz(n);