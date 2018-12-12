//global variables
var isFull = false;

//all animal methods

function sleep(time){
    var howLongSleep = time;
    console.log("I'm sleeping for " + 
                howLongSleep +
                " hours. Don't wake me up!");
}

function eat(amount){
    var howMuchFood = amount;
    if (howMuchFood > 2){
        isFull = true;
    }
    console.log("I'm eating " +
                howMuchFood +
                " lbs of food. Back off." +
                " Are you full? " + isFull);
}

function jump(howHigh, howLong){
    console.log("You're jumping " +
                howHigh + 
                " ft hight for " + 
                howLong +
                " minutes.");
}

function herb(){
    console.log("I love plants.");
}

//0 = omnivore C = carnivore H = herbivore

function hunt(type){

    var ftype = type.toLowerCase();

    switch(ftype){
        case "o": 
            console.log("plants and animals");
        break;
            
        case "c":
            console.log("animals");
        break;
            
        case "h":
            herb();
        break;

        default: 
            console.log("No hunting.");
    }


}

function run(speed, distance){
    var howFar = distance;
    console.log("I'm going " +
                speed +
                " kilometers per hour for " +
                howFar +
                " miles.");
    
}

//calling all methods

sleep(5);
eat(3);
jump(3, 2);
hunt("h");
run(12, 20);