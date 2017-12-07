console.log("1 задача");
var tar = 8
var fairy = 29;
while (tar && fairy) {
    tar--;
    fairy -= .5;
    console.log("Осталось " + fairy + "л. моющего средства");
}
resault = !tar ? "Грязных тарелки кончились " : "Осталось " + tar + "тарелок ";
resault += !fairy ? "Моющее средство кончилось" : "Осталось " + fairy + "л. моющего средства";
console.log(resault);

console.log("2 задача");
var table = [];
let funt = 1;
while (funt <= 10) {
    table[funt] = funt * 0.4536;
    console.log(funt + " lb = " + table[funt] + "kg");
    funt++;
}

console.log("3 задача")
var Arr = ['one','two','three','four','two'];
console.log(Arr.join());
console.log(Arr.join(' + '));


console.log(Arr.slice());
console.log(Arr.slice(0,5));


console.log(Arr.indexOf());
console.log(Arr.indexOf('one'[fromIndex = 4]));
console.log(Arr.indexOf('two'));
console.log(Arr.indexOf('four'));


console.log(Arr.lastIndexOf());
console.log(Arr.lastIndexOf('two'));
console.log(Arr.lastIndexOf('two',4));


console.log(Arr.concat(Arr));
console.log(Arr.concat(1,4,"five"));
console.log(Arr.concat(3,9,"nine",["ten","five"]));

console.log("Задача 4");
var x1=4, x2=3;
var y1=7, y2=1;
var z1=5, z2=2;
console.log("треугольник x1 x2", x1,x2, 'y1 y2', y1,y2, 'z1 z2', z1,z2);

let x = (x1-y1)*(x1-y1)+(x2-y2)*(x2-y2);
let y = (y1-z1)*(y1-z1)+(y2-z2)*(y2-z2);
let z = (x1-z1)*(x1-z1)+(x2-z2)*(x2-z2);

console.log("Сторона x² равна",x);  
console.log("Сторона y² равна",y);  
console.log("Сторона z² равна",z);

if (x===y+z || y===x+z || z===x+y) {
    console.log("треугольник прямоугольный");
} else {
    console.log("треугольник не прямоугольный")
}
console.log("5 задача");
var puzir = [3, 1, 265, 3021, 432, 132, 15, 21, 6, 64];
console.log("Заданный массив", puzir);
let varN = puzir.length;
console.log("Длина массива", varN);

let w, r, temp;

for (w = 0; w < varN - 1; w++) {
    for (r = 0; r < varN - w; r++) {
 
        if( puzir[r] > puzir[r+1] ){
            temp = puzir[r];
            puzir[r] = puzir[r+1];
            puzir[r+1] = temp;
        }
    }
}

console.log (puzir);

