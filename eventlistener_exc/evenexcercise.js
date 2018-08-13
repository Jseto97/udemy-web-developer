var button = document.querySelector("button");
// var ispurple = false;
//
// button.addEventListener("click", function(){
//
//    if(document.body.style.background == "purple"){
//      varispuple = true;
//      document.body.style.background = "white";
//    } else {
//      varispurple = false;
//      document.body.style.background = "purple";
//    }
// })

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
})
