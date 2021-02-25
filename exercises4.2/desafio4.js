let soma = 0;
let media = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index++){
    soma += numbers[index]
    media = soma/numbers.length
}

if(media > 20){
    console.log("Valor é maior que 20!")
}else{
    console.log("Valor é igual ou menor que 20!")
}

//Resposta: Usando o mesmo codigo do desafio anterior adionacei condicionais fora da estrutura de repetição para imprimir uma mensagem

