// 1st Assignment

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(1000);
console.log(result);



// 2nd Assignment

function woodCalculator(chair, table, bed){
    var woodOfChair = chair * 1;
    var woodOfTable = table * 3;
    var woodOfBed = bed * 5;
    var total = woodOfChair + woodOfTable + woodOfBed;
    return total;
}
var result1 = woodCalculator(1,1,1);
console.log(result1);

var result2 = woodCalculator(14,5,12);
console.log(result2);



// 3rd Assignment

function brickCalculator (floor){
    for(var i = 0; i < floor; i++){
        if(floor <= 10){
            brick1 = 15 * floor * 1000;
            return brick1;
        }
        else if(floor > 10 && floor <= 20){
            brick1 = 150000;
            brick2 = 12 * floor * 1000;
            total = brick1 + brick2;
            return total;
        }
        else{
            brick2 = 390000;
            brick3 = 10 * floor * 1000;
            total = brick2 + brick3;
            return total;
        }
    }
}
var result = brickCalculator(25);
console.log(result);



// 4th Assignment

function tinyFriend(name){
    var smallestName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < smallestName.length){
            smallestName = currentName;
        }
    }
    return smallestName;
}
var result = tinyFriend(['Abdullah','Sad','Afsar Ahmed','Zahid','Rafi','Abdur Rahim']);
console.log(result);