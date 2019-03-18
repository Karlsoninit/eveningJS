

//==== функция с задержной ======


function firstFn(value){
    setInterval(function(){
        console.log('one');
      }, 5000);
  }
  
  function secondFn(){
    console.log('second');
  }
  
  firstFn(secondFn());



//======== callback ==========

function newMap(arr, callback) {
    let newMass = [];
    let resultNew;
    for(let elem of arr) {
        resultNew = callback(elem);
        newMass.push(resultNew);
    }

    return newMass;
}


function newFn(elem) {
    return elem + 10;
}


function Mult(elem) {
    return elem * 10;
}

const numbers = [2,3,4,5];


console.log(newMap(numbers, newFn ));
console.log(newMap(numbers, Mult));
console.log(numbers);