const cardList = document.querySelector('.cardList');
let point = 0;
const tally = document.getElementById('point')
addCard('starter');

buildBoard();

let interval = setInterval(function (){
    addCard(cardList.children.length + 1)
}, 2000);

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}

let blu = setInterval(function (){
    blueCard('Blue Boy')
}, 6000);

let purp = setInterval(function (){
    purpleCard('hello')
}, 10000);

let yello = setInterval(function (){
    yellowCard('Shhhh')
}, 15000);

function blueCard(value){
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('blue');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function purpleCard(value){
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('purple');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function yellowCard(value){
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('yellow');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

cardList.addEventListener('click', function (e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('purple')){
        e.target.classList.remove('purple');
        e.target.classList.add('active');
        point++;
        point++;
        point++;
        point++;
        tally.innerHTML = `Points: ${point}`;
        return
    }
    if (e.target.classList.contains('yellow')){
        e.target.classList.remove('yellow');
        e.target.classList.add('active');
        point++;
        point++;
        point++;
        point++;
        point++;
        point++;
        tally.innerHTML = `Points: ${point}`;
        return
    }
    if (e.target.classList.contains('blue')){
        e.target.classList.remove('blue');
        e.target.classList.add('active');
        point++;
        point++;
        point++;
        tally.innerHTML = `Points: ${point}`;
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        point++;
        tally.innerHTML = `Points: ${point}`;
        return
    }
    e.target.remove();
    point++;
    point++;
    tally.innerHTML = `Points: ${point}`;
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        clearInterval(blu);
        clearInterval(yello);
        clearInterval(purp);
        let end = document.createElement('h1');
        end.innerHTML = `You finished the game with ${point} points! Hooray`;
        cardList.appendChild(end);
        tally.remove();
    }
});