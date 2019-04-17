'use strict'




// let showBox = document.querySelector('.list')
// console.log(showBox.children[0]);


// let find = document.querySelector('');

// find.onclick = function(){
//     find.style.color = 'red';
//     find.style.fontSize = '90px';
//     find.textContent = 'its true!!'
// }

// console.log(find);

// let text = document.querySelector('.text');
// console.log(text)

// let input = document.querySelector('.input');
// console.log(input);

// let button = document.querySelector('.click');

// console.log(button);

// function test() {
//     if( input.value.length > 0){
//         text.className = 'textColor';
//         text.textContent = input.value;
//     }
// }




// button.addEventListener('click', test);


// let mass = ['html', 'css', 'react', 'c++','JavaScript'];

// let showList = document.querySelector('.list');
// console.log(showList);


// let result = mass.reduce((string, el) => string  + `<li>${el}</li>`, "");
// showList.style.fontSize = '50px';
// showList.innerHTML += result;

// console.log('show this',showList.children[2].style.color = 'red');





//----------------------------------







// let btnLeft = document.querySelector('.left');
// console.log(btnLeft)
// let btnRight = document.querySelector('.right');
// console.log(btnRight)

// let images = document.querySelectorAll('img');
// console.log(images);

// let i = 0;

// btnRight.onclick = function(){
//     images[i].className = ''
//     i++
//     if(i > images.length -1){
//         i = 0
//     }

//     setTimeout(function(){

//         images[i].className = 'showed';
//     },2000)
// }

// btnLeft.onclick = function(){
//     images[i].style.display = 'none';
//     i--
//     if(i < 0){
//         i = images.length -1
//     }
//     images[i].style.display = 'block';
// }


//----------------------



// let newP = document.createElement('p');
// newP.textContent = 'Hello world!'
// newP.style.fontSize = '50px';
// console.log(newP);


// let image = document.createElement('img');
// image.setAttribute('src', 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606');
// image.setAttribute('alt', 'lego!')
// image.src = 'https://shop.lego.com/_build/public/red-brick-ddb08f57744c64b5848433940f86f3f3.png';
// image.classList.add('image')

// console.log(image);

// let a = document.createElement('a');
// a.setAttribute('href', 'https://google.com');
// a.textContent = 'Click'

// console.log(a);


// let body = document.body;


// body.prepend(newP);
// body.prepend(image);
// body.prepend(a);


// let list = document.querySelector('.list')

// list.insertAdjacentHTML('afterbegin', `<li>Ok</li>`)

// // list.innerHTML = `<li>Ok</li>`
// console.log(list);


//----------------------------


/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


// let categories = document.querySelectorAll('.categories > li');

// categories.forEach(el => {
//     console.log(el.firstChild)
//     console.log(el.firstElementChild.childElementCount)
// })



//----------------------------- task 02 -----------------



/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


// let list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';
// console.log(list);


//------------------------------- taks 03 -------------------

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// let list = document.querySelector('.list');

// let result = elements.reduce((acc, el) => acc + `<li>${el}</li>`, '');

// list.innerHTML = result;


// console.log(list)


//---------------- task 04 ---------------------------------


/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     },
//     {
//         url:
//           "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "2 Lion on Grass Field during Daytime"
//       },
//       {
//         url:
//           "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "2 Lion on Grass Field during Daytime"
//       },
//       {
//         url:
//           "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "2 Lion on Grass Field during Daytime"
//       }
//   ];

  
//   let galleryIndex = document.querySelector('.gallery')
//   console.log(galleryIndex);



//   let result  = galleryItems.reduce((acc, el) => acc + `<li><img style ="width: 300px" src="${el.url}"><p>${el.alt}</p></li>`, '')


//   galleryIndex.innerHTML = result;


//------------------------- task 05 --------------------------

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/


//----------------------- task 06 ---------------------------


// let input = document.querySelectorAll('.size-filter input[checked]');
// console.log(collectInputData(input))

// function collectInputData(inputs) {
//     let arr = Array.from(inputs);
//     return arr.map(el => console.log(el));
// }


//------------------------------------ 07 ------------


/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

let root  = document.querySelector('#root');

function color() {
    return Math.floor(Math.random()*256)
}

console.log(root);

function add(num) {
    let i = 0;
    let w = 30 + 'px';
    while(i < num){
        i++
        console.log(i)

    root.innerHTML = `<div style =" width:${w}; height:${w}; background: rgb(${color()})"  ></div>`
        w += 10;
    }
}

add(4)