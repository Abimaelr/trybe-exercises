const statesList = ['Selecione uma opção','----------------','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const state = document.querySelector('#states');

for(let index = 0; index < statesList.length; index += 1){
    const stateItem = document.createElement('option')
    
    stateItem.innerText = statesList[index];

    state.appendChild(stateItem);
}

const btn = document.querySelector('#submit');

const bdy = document.querySelector('body');

const data = document.createElement('div');

data.className = 'allInfo';

bdy.appendChild(data);






// btn.addEventListener('click', function(evt){
//     evt.preventDefault();
// })