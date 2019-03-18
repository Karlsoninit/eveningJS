'use strict'


//=========== замыкание =========


function counter() {
    let incr = 10;
    function newCounter() {
        incr += 1;
        console.log(incr);
    }
    return  newCounter;
}


let showCounter = counter();
let showCounter2 = counter();
let showCounter3 = counter();


showCounter();
showCounter();
showCounter();
showCounter();  
showCounter();
showCounter();

showCounter2();
showCounter2();
showCounter2();


showCounter3();
showCounter3();
showCounter3();
showCounter3();
