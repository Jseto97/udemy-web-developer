
var list = ["buy new turtle"];
var input = prompt("what would you like to do?");

window.setTimeout(function(input){
  if(input === "new"){
    var newitem = prompt("enter a new todo");
    list.push(newitem);
    return list;
  } else if(input === "list"){
    console.log(list);
  } else if (input === "quit"){
  }
}, 500);
