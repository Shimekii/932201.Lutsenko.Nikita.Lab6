const cat = document.getElementById('left');
const dog = document.getElementById('right');

const buttonLeft = document.getElementById('left-col');
const buttonMid = document.getElementById('mid-col');
const buttonRight = document.getElementById('right-col');

function hide(animal) {
    animal.classList.add('show');
}

buttonLeft.addEventListener('click', function(){
    cat.classList.remove('show');
    hide(dog);
})

buttonMid.addEventListener('click', function(){
    cat.classList.remove('show');
    dog.classList.remove('show');
})

buttonRight.addEventListener('click', function(){
    dog.classList.remove('show');
    hide(cat);
})