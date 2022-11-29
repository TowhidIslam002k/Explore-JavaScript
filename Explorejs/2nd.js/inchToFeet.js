function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var seniorFeet = [300, 120, 600];

var feet1 = inchToFeet(156);
console.log(feet1);
var feet2 = inchToFeet(288);
console.log(feet2);
var feet3 = inchToFeet(seniorFeet[2]);
console.log(feet3);