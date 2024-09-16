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

const tamanhoDoObjeto1 = Object.entries(lesson1);
console.log(tamanhoDoObjeto1.length);

const tamanhoDoObjeto2 = Object.entries(lesson2);
console.log(tamanhoDoObjeto2.length);

const tamanhoDoObjeto3 = Object.entries(lesson3);
console.log(tamanhoDoObjeto3.length);