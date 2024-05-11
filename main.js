const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const containermain = document.querySelector('#container-main');
const containersecond = document.querySelector('#container-second');
const submit = document.querySelector('#submit');
const text = document.querySelector('#text');

submit.addEventListener('click', () => {
    containermain.style.display = 'none';
    containersecond.style.display = 'block';
    one.innerHTML = '2';
});

one.addEventListener('click',changeValue1);
two.addEventListener('click',changeValue2);
three.addEventListener('click',changeValue3);
four.addEventListener('click',changeValue4);
five.addEventListener('click',changeValue5);

function changeValue1() {
    text.innerHTML = one.innerHTML;
}

function changeValue2() {
    text.innerHTML = two.innerHTML;
}

function changeValue3() {
    text.innerHTML = three.innerHTML;
}

function changeValue4() {
    text.innerHTML = four.innerHTML;
}

function changeValue5() {
    text.innerHTML = five.innerHTML;
}