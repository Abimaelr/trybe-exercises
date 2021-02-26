console.log('\n---------1--------\n\n');
let n = 5;

for(let linha = 0; linha < n; linha++){
    let saida = "";
    for(let coluna = 0; coluna < n; coluna++){
        saida += "*";
    }
    console.log(saida);

}



console.log('\n---------2--------\n\n');


n = 5;
 let saida = "";
for (let linha = 0; linha < n; linha++) {
   
        saida += "*";
        console.log(saida);
}





console.log('\n---------3--------\n\n');
n = 5;
saida = "";

for (let linha = 0; linha <= n; linha++) {
    for (let espaco = n; espaco > linha; espaco--) {
        saida += " ";
    }
    for (let col = 0; col < linha; col++) {
        saida += "*";
    }
    console.log(saida);

    saida = '';
}



console.log('\n---------4--------\n\n');




console.log('\n---------b1--------\n\n');




console.log('\n---------b2--------\n\n');