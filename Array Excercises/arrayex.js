// reverses the array completely

function printbackwards(arr){
    var rev = arr.reverse();
    rev.forEach(function(element){
      console.log(element);
    });
  }

function pbloop(arr){
  for(let i = arr.length - 1; i > -1; i--){
    console.log(arr[i]);
    }
  }

function isuniformloop(arr){
      var key = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] !== key){
        return false;
      }
    }
    return true;
  }

// function isuniform(arr){
//   var key = arr[0];
//     var real = arr.forEach(function(element){
//       if(element !== key){
//         return false
//       }
//     }); return real;
// }

function sumarrayloop(arr){
  var sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum = sum + arr[i];
  }return sum;
}

function sumarray(arr){
  var sum = 0;
   arr.forEach(function(element){
     sum = sum+element;
   }); return sum;
}

function max(arr){
  var maxvalue = 0;
  arr.forEach(function(element){
    if(element >= maxvalue){
      maxvalue = element;
    }
  }); return maxvalue;
}
