const statesList = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const state = document.querySelector('#states');

for(let index = 0; index < statesList.length; index += 1){
    const stateItem = document.createElement('option')
    
    stateItem.innerText = statesList[index];

    state.appendChild(stateItem);
}

const btn = document.querySelector('#submit');

btn.addEventListener('click',submit)


function submit(){
    const bdy = document.querySelector('body');

    const data = document.createElement('div');

    if(document.querySelector('.allInfo')) document.querySelector('.allInfo').remove()

    data.className = 'allInfo';

    bdy.appendChild(data);

    const infos = ['Nome','Email',"CPF",'Endereço','Estado','Moradia','Resumo', 'Cargo','Descrição do Cargo','Data']

    for(let index = 0; index < infos.length; index += 1){
        const infoTittle = document.createElement('h4');
        const infoDescription = document.createElement('p');

        infoTittle.innerText = infos[index];
        infoDescription.innerText = document.querySelectorAll('.info')[index].  value;


        data.appendChild(infoTittle);
        data.appendChild(infoDescription);


    }

}




// btn.addEventListener('click', function(evt){
//     evt.preventDefault();
// })