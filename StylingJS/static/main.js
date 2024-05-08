

function changeColor(event) {
    event.preventDefault();
    const box = document.getElementById('box');
    box.style.backgroundColor = 'red';
}

function changeTextColor(event) {
    event.preventDefault();
    const circle = document.getElementById('circle');
    circle.style.textShadow = '1px 1px';
    circle.style.color = 'green';
}

function revertTextColor(event){
    event.preventDefault();
    const circle = document.getElementById('circle');
    circle.style.textShadow = '0px 0px'
    circle.style.color = 'black';
}

function changeText(event) {
    event.preventDefault();
    const wheel = document.getElementById('wheel');
    wheel.style.fontSize = '85px'
}

function addLorem(event) {
    event.preventDefault();
    document.getElementById('lorem').innerHTML = 'Lorem ipsum dolor sit amet. Ut quaerat sapiente ut voluptatem labore est totam vitae At blanditiis dolore. Eum nesciunt quas ut voluptas aspernatur non internos molestiae qui quia quaerat est porro reiciendis? Eum consequatur placeat ea vitae adipisci eos odio voluptas vel libero earum et sint nulla. Ut amet nihil et ipsam enim et labore aliquid aut aperiam nihil et laudantium iste!'

}

function getCat(event) {
    event.preventDefault();
    const cat = document.createElement('img');
    cat.src = '../static/images/8-bit-cat.jpg';
    document.querySelector('.cat').appendChild(cat);

}


