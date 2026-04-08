const taskBtn = document.getElementById('taskBtn');
const feedBtn = document.getElementById('feedBtn');
const storeBtn = document.getElementById('storeBtn');
const controlBar = document.getElementById('controlBar');

const catSprite = document.getElementById('catSprite');

const width = catSprite.offsetWidth;




[taskBtn, feedBtn, storeBtn].forEach(button => {
    button.style.width = `${width/3}px`;
});


