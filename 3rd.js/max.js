let bd = 11000;
let india = 2500;
let uk = 1750;
if(bd > india) {
    if(bd > uk) {
        console.log('bd is bigger')
    }
    else{
        console.log('uk is bigger');
    }
}
else{
    if(india > uk){
        console.log('india is bigger')
    }
    else{
        console.log('uk is bigger');
    }
}




let max = Math.max(bd, india, uk);
console.log(max);