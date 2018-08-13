var moviesdb = [
    {
      Title: "Shrek",
      Rating: "5 stars",
      HasWatched: true
    },
    {
      Title: "Shrek2",
      Rating: "3 stars",
      HasWatched: false
    },
    {
      Title: "Shrek3",
      Rating: "4 stars",
      HasWatched: true
    },
    {
      Title: "Shrek4",
      Rating: "2 stars",
      HasWatched: false
    },
]

function movies(arr){
  arr.forEach(function(element) {
    if(element.HasWatched){
      console.log("You have watched" + " " + element.Title + " - " + element.Rating);
    } else {
      console.log("You have not seen" + " " + element.Title + " - " + element.Rating);
    }
  });
}
// can also use a helper function and call helper function in the for each (colt's solution)

function moviesloop(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].HasWatched){
      console.log("You have watched" + " " + arr[i].Title + " - " + arr[i].Rating);
    } else {
      console.log("You have not seen" + " " + arr[i].Title + " - " + arr[i].Rating);
    }
  }
}
