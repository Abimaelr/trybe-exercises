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
  let maior = 0;
  let indexOfMaior = 0;

  for(let index = 1; index < valores.length; index++){
    if(valores[index] > valores[index-1]){
      maior = valores[index];
      indexOfMaior = index;
    } 
  }
  return indexOfMaior;
}

function indexOfMenor(array){
  let valores = array;
  let menor = 0;
  let indexOfMenor = 0;

  for(let index = 1; index < valores.length; index++){
    if(valores[index] < valores[index-1]){
      menor = valores[index];
      indexOfMenor = index;
    } 
  }
  return indexOfMenor;
}

