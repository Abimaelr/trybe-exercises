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

//Verificar se N é um número ímpar
saida = '';
if(n%2 == 0){
    console.log("n precisa ser um número ímpar!")
}
else{
    //contar quantos números ímpares tem de 0 a n
    let impares = 0;
    for(let contar = 0; contar <= n; contar++){
        if(contar%2 != 0){
            impares++;
        }
    }

    for(let linha = 0; linha <= n; linha ++){
       
        for(let espaco = impares; espaco > 0; espaco--){
            saida += " ";
        }
        for(let col = 0; col < linha; col++){
            saida += "*"
        }
        if ((linha % 2) != 0) {
            console.log(saida);
            impares --;
        } 
        saida = '';
    }
}


console.log('\n---------b1--------\n\n');

saida = '';

n = 9;

if (n % 2 == 0) {
    console.log("n precisa ser um número ímpar!")
}
else {
    //contar quantos números ímpares tem de 0 a n
    let impares = 0;
    for (let contar = 0; contar <= n; contar++) {
        if (contar % 2 != 0) {
            impares++;
        }
    }

    for (let linha = 0; linha <= n; linha++) {

        for (let espaco = impares; espaco > 0; espaco--) {
            saida += " ";
        }
        for (let col = 0; col < linha; col++) {
            if(col > 0 && col < (linha - 1) && linha < n){
                saida += " ";
            }
            else{
                saida += "*"
            }
            
        }
        if ((linha % 2) != 0) {
            console.log(saida);
            impares--;
        }
        saida = '';
    }
}



console.log('\n---------b2--------\n\n');