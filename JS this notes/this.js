var col = {
    firstName: "colt",
	SayHi: function(){
		return "Hi" + this.firstName
    },
	addNums: function(a,b,c,d){
		return this.firstName + " just calculated " + (a+b+c+d);
    }
}

var ellie = {
    firstName: "ellie"
}

// bind example
var ellieCalc = col.addNums.bind(ellie, 1,2);

// apply example
var ellieApply = col.addNums.apply(ellie, [1,2,3,4]);

var colt = {
	firstName: "colt",
	sayHi: function(){
		setTimeout(function(){
            console.log("hi " + this.firstname)
        }.bind(this),1000)
    }
}
