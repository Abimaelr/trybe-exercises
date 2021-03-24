const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const change = (obj,key,value) => {
      obj[`${key}`] = value
  }

  const list = (obj) => Object.keys(obj).join(', ');

  const len = (obj) => Object.keys(obj).length;

  const val = (obj) => Object.entries(obj).join(', ');

  const allLessons = () => Object.assign({},{'lesson1':lesson1},{'lesson2':lesson2},{'lesson3':lesson3});



 const nAlunos = (obj) => {
     let a = 0;
     for(key in obj){
         a += obj[key].numeroEstudantes;
     }
     return a;
 }

const position = (obj,pos) => obj[Object.keys(obj)[pos]];


const verifyPair = (obj,key,value) => Object.keys(obj).includes(key)? (obj[`${key}`] == value? true:false):false


console.log(Object.keys(lesson3).includes('turno'))

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))