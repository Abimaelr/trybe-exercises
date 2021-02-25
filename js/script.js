
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("=============1==============");

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log("=============2==============");

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = + numbers[i];
}
console.log(sum);

console.log("=============3==============");

let avg = 0;
for (let i = 0; i < numbers.length; i++) {
    avg = + numbers[i];
}
avg = avg/(numbers.length)/
console.log("A média é: "+ avg);

console.log("=============4==============");

if(avg > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor que 20");
}

console.log("=============5==============");
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i]>maior) {
        maior = numbers[i]
    }
}
console.log("O número maior é: " + maior);

console.log("=============6==============");

let impar = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]% 2 == 1) {
        impar++;
    }
}
if(impar > 0){
    console.log("Existem " + impar + " número(s) ímpar(es) no array!");
}
else{
    console.log("Nenhum valor ímpar encontrado!");
}
console.log("=============7==============");
console.log("=============8==============");
console.log("=============9==============");
