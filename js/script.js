// console.log("---------Parte 1-------");

// let info = {
//     personagem: "Margarida",
//     origem: "Pato Donald",
//     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//     recorrente: 'Sim'
// };
// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: 'Sim'
// };

//   console.log("Bem vinda, " + info.personagem + '\n')


//     for(let index in info){
//         console.log(index)
//     }
//     console.log('\n\n');

//     for(let index in info){
//         console.log(info[index])
//     }

//     console.log('\n\n');

//     for(let index in info){
//         if(info[index] === "Sim" && info2[index] === "Sim"){
//             console.log("Ambos Recorrentes")
//         }
//         else{
//             console.log(info[index] + " e " + info2[index])
//         }
       
//     }
//     console.log('\n\n');



console.log("---------Parte 2-------");

function verificaPalindrome(nome){
  let palavra = nome;
  let aoContrario = "";
  for(let letras = (palavra.length-1); letras >= 0; letras--){
      aoContrario += palavra[letras];
  }
  if(palavra == aoContrario){
    return true
  }
  return false
}

//----------------------------------------

function indexOfMaior(array){
  let valores = array;
  let maior = valores[0];
  let indexOfMaior = 0;

  for(let index = 1; index < valores.length; index++){
    if(valores[index] > maior){
      maior = valores[index];
      indexOfMaior = index;
    }


 
  }
  return indexOfMaior;
}

function indexOfMenor(array){
  let valores = array;
  let menor = valores[0];
  let indexOfMenor = 0;

  for(let index = 1; index < valores.length; index++){
    if(valores[index] < menor){
      menor = valores[index];
      indexOfMenor = index;
    } 
  }
  return indexOfMenor;
}
function repeticao(entrada){
  let array = entrada;

  let valorMaior = array[indexOfMaior(array)];
  let contagem = []

  for(let index = 0; index <= valorMaior; index++){
    contagem[index] = 0;
  }
  for(let index = 0; index < array.length; index++){
    contagem[array[index]]++;
  }

  let repeticao = indexOfMaior(contagem);

  return repeticao
}

function somaAteN(n){
  let somatorio = 0;
  for(let contador = 0; contador <= n; contador++){
    somatorio += contador;
  }
  return somatorio;
}

function verificaFimPalavra(inicio, fim){
  if(fim.length > inicio.length) return("Valor Inválido");

  let primeira = "";

  for(let index = (inicio.length - fim.length); index < inicio.length; index++){
    primeira += inicio[index];
  }


  if(primeira === fim) return true
  else return false

}


const romanos ={
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 40,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanToDecimal(numero){
  let decimal = 0;
  for(let index = 0; index < numero.length; index++){
    decimal += romanos[numero[index]];
    if(romanos[numero[index]] > romanos[numero[index - 1]]){
      decimal -= 2*romanos[numero[index - 1]];
    }
  
  }
  console.log(decimal);
return(decimal);
}


