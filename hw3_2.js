//циклы while и for

let i = 1
while (i<=100){
    console.log(i);
    i++
}

for(a = 11; a<=33; a++){
    console.log(a)
}

for(b = 0; b <= 100; b++){
    if(b % 2 === 0){
        console.log(b)
    }
}


let total = 0
for(c = 1; c <=100; c++){
   //я сдалась и не смогла посчитать сумму от 1 до 100
} 

// задачи с 4-6 не знаю как решать

for(d = 0; d <=300; d++){
    if(d===0){
        console.log("Zero")
    } else if(d%2!==0 && d%3===0) {
        console.log("Hola")
    } else if(d%2===0 && d%12===0 && d!==48 ){
        console.log("Ooops")
    }else {
        console.log(d)
    }
}


//общие задачи
    //не знаю, как выводить отдельно количество итераций
n = 1000;
num = 0;
for(; n>50; num++){
    n/= 2;
    console.log(n);
}


let e = 43;
let f = 50;
for(; e<=f; e++){
    console.log(e);
}

//снова сложности с алгоритмом, оставила единственный вариант, где цикл не бесконечен
let g = 35;
do {
if(g%2===0){
    console.log(g / 2);
} else {
    console.log(g * 3 + 1);
    continue
} 
} while(g === 1);












