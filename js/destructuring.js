'use strict'

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};






function showName({
    name = 'not name',
    age,
    scores: {
        maths = 0,
        english = 0,
        science = 0
    }
}) {
    console.log(`my name ${name}`);
    console.log(`i have ${english}`);
}


showName(student);




function displayName (student) {
    console.log("my name is " + (student.name || "name"));
    console.log(`i am old ${student.age}`);
    console.log(`i now ${student.scores.maths}`);
}



function displaySummary({name, age ,scores:{ maths = 0, english = 0, science = 0}}){
    console.log(`hello ${name}`);
    console.log(`i have more them ${english}`);
}

displaySummary(student);


//========== запись вне функции =============

const {name, lastName, country, age = 25} = aboutMe;


const messege = (`hello, my name is ${name} my last name is ${lastName} i am ${age} year old and i am from ${country}`);

console.log(messege);