let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 !== 0){
        resultado += 1;
    }
}

if(resultado === 0){
    console.log("Nenhum valor impar encontrado");
}else{
    console.log(resultado);
}

//Resposta: Estava com dificuldade em resolver esse desafio. Resolvi com a ajuda do gabarito disponivel no course. Estava tentando colocar toda condição dentro do loop. Entendi que, primeiro devo iterar toda o array por meio do laço de repetição e somar todo numero impar encontrado na variavel resultado. Foi feito isso com uma condição onde o resto da divisão por dois deveria ser diferente de 0. Apaós fazer isso foi criado uma outra condicional para fazer a impressão no console.
