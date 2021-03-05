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
      
      daysList.appendChild(dayElement)
      
  }



