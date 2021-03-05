function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24,25,31]
  const fridays = [4, 11, 18, 25]

  //#days is a ID of the ul
  //.day is a class of the li
  const daysList = document.querySelector('#days')
  for(let index = 0; index < dezDaysList.length; index++){
      const dayElement = document.createElement('li')
      dayElement.innerText = dezDaysList[index]
      dayElement.className = 'day'
      if(holidays.includes(dezDaysList[index])){
        dayElement.className += ' holiday'
      }
      if(holidays.includes(dezDaysList[index])){
        dayElement.className += ' holiday'
      }
      if((index+2)%7 == 0){
        dayElement.className += ' friday'
      }
      
      daysList.appendChild(dayElement)

     
  }
//Creating the holiday Button

const btnContainer = document.querySelector('.buttons-container')
const btnHoliday = document.createElement('button')

btnHoliday.innerText = "Holidays!"

btnContainer.appendChild(btnHoliday)

let stateBtn = true

btnHoliday.addEventListener('click', function (){
    const colorDays = stateBtn?"rgb(238,238,238)":"#777";
    stateBtn = !stateBtn

    const elements = document.querySelectorAll('.holiday')

    for(let index = 0; index < elements.length; index++) elements[index].style.color = colorDays;

})


//Creating the holiday Button

const btnFriday = document.createElement('button')

btnFriday.innerText = "Fridays"

btnContainer.appendChild(btnFriday)

let stateBtn1 = true

btnFriday.addEventListener('click', function (){
    
  

    const elements = document.querySelectorAll('.friday')
    if(stateBtn1){
        for(let index = 0; index < elements.length; index++) elements[index].innerText = "Sextou";
    }
    else{
        for(let index = 0; index < elements.length; index++) elements[index].innerText = fridays[index];
       
    }
    
    stateBtn1 = !stateBtn1
})


//----------------------------------


function zoom_in(evt) {
    evt.target.style.fontSize = '40px';
  }

function zoom_out(evt) {
    evt.target.style.fontSize = '20px';
  }
  
  daysList.addEventListener('mouseover', zoom_in);

  daysList.addEventListener('click', zoom_out);



  const tasks = document.querySelector('.my-tasks')

  const add = document.querySelector('#btn-add')

  add.addEventListener('click', function(){
    const spn = document.createElement('span')
    spn.innerText = document.querySelector('#task-input').value
    
    tasks.appendChild(spn)
    console.log(spn)

  })