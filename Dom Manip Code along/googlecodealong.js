var links = document.querySelectorAll("a");

function linkreplace(arr){
	for(let i = 0; i < arr.length; i++){
	arr[i].setAttribute("href", "https://www.facebook.com");
    }
}

linkreplace(links);
