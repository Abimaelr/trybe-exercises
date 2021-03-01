console.log("---------Parte 1-------");

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
};

  console.log("Bem vinda, " + info.personagem + '\n')


    for(let index in info){
        console.log(index)
    }
    console.log('\n\n');

    for(let index in info){
        console.log(info[index])
    }

    console.log('\n\n');

    for(let index in info){
        if(info[index] === "Sim" && info2[index] === "Sim"){
            console.log("Ambos Recorrentes")
        }
        else{
            console.log(info[index] + " e " + info2[index])
        }
       
    }
    console.log('\n\n');



console.log("---------Parte 2-------");

