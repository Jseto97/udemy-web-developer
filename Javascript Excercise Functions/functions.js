var x = prompt("enter your number");

function isEven(num){
  if(num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(isEven(x));

function fact(num){
  var ans = 1
  for(var i = num; i > 1; i--){
     ans = ans*i
  }
    return ans
}

console.log(fact(x));

// function kebab2snake(str){
//
// }
