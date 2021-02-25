let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero);

//Resposta: Para a resolução do desafio foi feito um laço de repetição onde foi comparado se o número em qual o laço estava percorrendo era mior que o outro. Ideia para solução tirada desse link:https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array