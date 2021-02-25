let soma = 0;
let media = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index++){
    soma += numbers[index]
    media = soma/numbers.length
}
console.log(media);

//Resposta: Foi feito o mesmo processo do desafio 2, so acrescentei a variavel media e dividi a soma pelo quantidade de elementos na array.