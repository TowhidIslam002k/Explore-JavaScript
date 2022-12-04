function explain_myself(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    task();
}

function morning8(){
    console.log('ami sokal 8tay ghum theke uthi');
}
function morning10(){
    console.log('10ta baje ami school a jai');
}

explain_myself('Md Towhid', 19, morning8);
explain_myself('Md Towhid', 19, morning10);