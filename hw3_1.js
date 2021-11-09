//работа с if-else
let a = -3;
if(a === 0){
    console.log("верно");
} else {
    console.log("неверно");
}

let b = 1;
if(b > 0){
    console.log("верно")
} else {
    console.log("неверно")
}


let c = -3;
if(c < 0){
    console.log("верно")
} else {
    console.log("неверно")
}

let d = 1;
if(d >= 0){
    console.log("верно")
} else {
    console.log("неверно")
}

let e = -3;
if(e <= 0){
    console.log("верно")
} else {
    console.log("неверно")
}

let f = 1;
if(f !== 0){
    console.log("верно")
} else {
    console.log("неверно")
}


let g = "тест";
if(g === "test"){
    console.log("верно")
} else {
    console.log("неверно")
}

let h = 1;
if(h === "1"){
    console.log("верно")
} else {
    console.log("неверно")
}

//логические переменные

const test = false;
if(test === true){
    console.log("верно")
} else {
    console.log("неверно")
}

const result = test === true ? "верно" : "неверно";
console.log(result);

const test2 = true;
if(test2 !== true){
    console.log("верно");
} else {
    console.log("неверно");
}

const result2 = test2 !== true ? "верно" : "неверно";
console.log(result2);

//работа с && и ||
const j = 2;
if(j>0 && j<5){
    console.log("верно");
} else {
    console.log("неверно");
}

const k = 2;
if(k===0 || k ===2){
    console.log(k+7);
} else {
    console.log(k/10);
}

const l = 3;
const m = 5;
if(l <=1 && m >=3){
    console.log(l+m);
}else {
    console.log(l-m);
}

const n = 0;
const o = 6;
if(n>2 && n<11 || o>=6){
    console.log("верно");
} else {
    console.log("неверно");
}

//на switch-case

const num = '3';

switch(num) {
    case "1":{
        console.log("зима")
        break;
    }
    case "2":{
        console.log("весна")
        break;
    }
    case "3":{
        console.log("лето")
        break;
    }
    default: {
        console.log("осень")
    }
}


//общие задачи 

let day = 24;
if(day <=10){
    console.log("первая декада");
} else if (day <= 20){
    console.log("вторая декада");
} else {
    console.log("третья декада");
}


let month = 6;
if(month === 12 || month <= 2){
    console.log("winter");
} else if (month <= 5){
    console.log("spring");
} else if(month <= 8){
    console.log("summer");
} else{
    console.log("autumn");
}



for(let i = 1; i <=100; i++){
   if(i % 3 === 0  && i % 5 === 0){
        console.log("fizzbuzz")
    } else if(i % 5 === 0){
        console.log("buzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    } else{
        console.log(i)
    }
}


