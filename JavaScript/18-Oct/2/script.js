// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."
// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."

function tellFortune(x,y,z,n) {
    console.log("You will be a "+x+" in "+y+", and married to "+z+" with "+n+" kids.")
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);

// --------------------------or-------------------

function tellFortune2(info) {
    console.log("You will be a "+info.jobTitle+" in "+info.geographicLocation+", and married to "+info.partnersName+" with "+info.numberOfChildren+" kids.")
}
var info ={};
info.geographicLocation='Jordan';
info.jobTitle='software engineer';
info.numberOfChildren=3;
info.partnersName='Alice';
tellFortune2(info);

