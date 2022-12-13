`use strict`
// =======================================================
// =======================================================
// =======================МАссивы================================


                     // Задача №2


// let users = [`Ваня`, `Иштван`,];
// users.push(`Оля`)

// let firstName = `Иштван`;
// let newName = `Петя`

// users.forEach((user, index) => {
//    if (user === firstName) {
//       users.splice(index, 1, newName)
//    }
// });

// console.log(users)

// let removed =  users.shift()
// console.log(removed)

// users.splice(0, 0, `Маша`, `Паша`)

// console.log(users)



                     // Задача №3

// let users = [`Ваня`, `Иштван`, `Оля`];

// let removed = users.splice( 1, 1 );
// console.log(removed)


                 // Задача №4

// let users = `Ваня, Иштван, Оля`;

// let arr = users.split(`,`);

// console.log(arr)



//===================================================
// =======================================================
// =======================DOM================================
               

               // Задача №1

      // const elementOne = document.querySelector(`.data`)
   

      // console.log(elementOne.dataset.sayHi)



          // Задача №2

         //  const elementOne = document.querySelector(`.list ul`)
         //  const elementTwo = elementOne.lastElementChild

         //  console.log(elementTwo)



           // Задача №3

      // const elementOne = document.querySelectorAll(`.homework`)
      // const elementTwo = elementOne[0].querySelectorAll(`.like`)
      // console.log(elementTwo)


      //===================================================
// =======================================================
// =======================Размеры.Прокрутка.Координаты================================

   // Задача №1

//    const area = document.querySelector(`.subscribe`)
//    //с полосой
//    const areaWidthCommon = area.offsetWidth
//    console.log(areaWidthCommon)
//    //без
//    const areaWidthWithout = area.clientWidth
// console.log(areaWidthWithout)

// const result = areaWidthCommon - areaWidthWithout;
// console.log(result)



 // Задача №2

//  setTimeout(() => {
//    scrollTo({
//       top: 100,
//       left: 0,
//       behavior: "smooth",
//    });
// }, 1000);




 // Задача №3
const itemOne = document.querySelector(`.text`)

const itemOneTop = itemOne.getBoundingClientRect().top
const itemOneLeft = itemOne.getBoundingClientRect().left


console.log(itemOneTop )
console.log(itemOneLeft)

const itemTwo = document.querySelector(`.homework`)

const itemTwoTop = itemTwo.getBoundingClientRect().top
const itemTwoLeft = itemTwo.getBoundingClientRect().left


console.log(itemTwoTop )
console.log(itemTwoLeft)

const itemThree = document.querySelector(`.like`)

const itemThreeTop = itemThree.getBoundingClientRect().top
const itemThreeLeft = itemThree.getBoundingClientRect().left


console.log(itemThreeTop )
console.log(itemThreeLeft)


// ======================================================













// let usersNames = [`Lion`, `Jackson`, `Chad`];

// console.log(usersNames);
// console.log(usersNames.includes(`Chad`))


// if (!usersNames.includes(10)){
//    usersNames.push(10);
//    console.log(usersNames)
// }






// usersNames.forEach(userName =>{

//    console.log(userName)
// })

// function showMassage(){
//    console.log(`Hallo!`)
// }

// showMassage();


// const numOne = 11;
// const numTwo = 33;

// function calcSum(a, b){
//    console.log(a + b)
// }

// calcSum(numOne, numTwo)


// let numOne
// let numTwo

// function someFunc(){
//    numOne = 10;
//    console.log(numOne)
//    oneMore = function(){
//       console.log(`Ку-Ку`)
//    }
// }

// someFunc()

// console.log(numOne)
// oneMore()


// let showText = (a) => console.log(a)

// showText(`Hollo`)

// console.log(navigator.userAgent)

// if (navigator.userAgent.includes(`Safari`)){
//    console.log(`hahahah`)
// }

// let confirmAns = confirm(`Hello!`)

// console.log(confirmAns)


// const htmlElement = document.body

// const childNode = htmlElement.children

// console.log(childNode)

// for (let i = 0; i < childNode.length; ++i) {
// 	console.log(childNode[i])};

// const elementBody = document.body

// const childNode = elementBody.children

// // console.log(childNode)

// for (let i=0; i < childNode.length; i++){
// console.log(childNode[i])
// }

// const bodyElement = document.body

// const previousSibbling = bodyElement.previousElementSibling
// const nextSibbling = bodyElement.nextElementSibling
// const parentSibbling = bodyElement.parentElement

// console.log(parentSibbling)
// console.log(previousSibbling)
// console.log(nextSibbling)

// const someObject = document.querySelectorAll(`.list__item ul>li`);

// console.log(someObject)

// for (let i = 0; i < someObject.length; i++){
//    console.log(someObject[0])
// }

// someObject.forEach(someObject => {
//    someObject.style.color = ` blue `
// })


// const list = document.querySelectorAll(`.list__item`) 

// const listA = list.querySelectorAll(`a`)

// listA.forEach(listA => {
//    listA.style.color = ` blue `
// })



// const list = document.querySelectorAll(`.item`);

// // console.log(list)

// list.forEach((list,) => {
//    list.innerHTML = `<span> Цифра:k</span>`;
// });


// let newObject = document.createElement(`div`);
// newObject.innerHTML = `<span class="big">Hello!</span>`;
// console.log(newObject)


// const block = document.querySelector(`.block__item`);
// block.prepend(newObject);
// block.before(newObject);
// block.after(newObject);
// block.append(newObject);



// const page = document.querySelector(`.block__item`)


// page.insertAdjacentHTML("beforeend",
// `<ul class = "new__list">
// <li>1</li>
// <li>2</li>
// <li>3</li>
// <li>4</li>
// </ul>`
// );



// if (2 > 1) {
//    function showMessage() {
//       console.log(`Hello`);
//    }
// }
// showMessage();


// const body = document.body
// console.log(body)

// // const childNodes = body.childNodes
// // console.log(childNodes)


// // const children = body.children
// // console.log(children)

// const first = body.parentElement
// const last = body.lastElementChild

// console.log(first)



// console.log(selector)

// // for (const item of selector){
// //    console.log(item)
// // }

// selector.forEach(item => {
//    console.log(item)
// });



// const newElement = document.querySelector(`.block__text`)

// const newNew = document.createElement(`div`);

// newNew.innerHTML = `Hello, world!!!!!!!!!!!!!!!`;



// newElement.prepend(newNew, `Queen`);
// // `
// console.log(newNew)


// const name = document.documentElement

// const nameWidth = name.clientWidth;
// console.log(nameWidth)
