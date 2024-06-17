'use strict';

// Повесить на кнопку обработчик события click и реализовать такой функционал:
//     В input[type=text] можно ввести цвет: red, green, blue и так далее.
//     По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
const button = document.getElementById('btn');
const square = document.getElementById('square');
const input = document.getElementById('text');
const circle = document.getElementById('circle');

const changeColor = function (event) {
    event.stopPropagation();
    square.style.backgroundColor = input.value;
};

button.addEventListener('click', changeColor);

// В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; " 
document.getElementById('e_btn').style.display = 'none';

// Повесить на input[type=range] обработчик события input и реализовать такой функционал:
//      при каждом изменении положения ползунка значение input[type=range] необходимо заносить
//      в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) 
document.getElementById('range').addEventListener('input', function (event) {   // обновление значения бегунка в одну строку
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
    circle.textContent = event.target.value + '%';
});
