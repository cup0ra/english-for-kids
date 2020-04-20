/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */


import '../css/style.css';
import '../css/style.scss';
import {actions,actions2,animals,animals2,clothes,emotions,food,itemes} from './cards.js';


const containerCategory = document.getElementById('container');
const container = document.querySelector('main');
const scoreContainer = document.getElementById('score-container')
const war = containerCategory.parentNode.removeChild(containerCategory);
container.append(war);
const body = document.querySelector('body');


class Card {
   constructor (state){ 
    if (document.getElementById('toggle').checked){
      const containerWord = document.createElement('div');
      containerWord.className = 'container-word';
      container.append(containerWord);
    state.forEach ((e) => {
        const cards = document.createElement('div');
        cards.id = 'card';
        cards.className = 'cards';
        cards.innerHTML = `
      <div class="flipper">
        <div class="front game" id="${  e.word  }" style="background-image: url('${  e.image  }');" >
          </div>
          <audio class="audio" data-word="${  e.word  }" src="${  e.audioSrc }" ></audio>
        </div>`;
        containerWord.append(cards);
      });
      const button = document.createElement('div');
      button.id = 'play-game';
      button.className = 'play';
      button.innerText = 'Start Game'
      container.appendChild(button); 
    } else{
        state.forEach ((e) => {
        const cards = document.createElement('div');
        cards.id = 'card';
        cards.className = 'cards';
        cards.innerHTML = `
        <div class="flipper">
          <div class="front" id="${  e.word  }" style="background-image: url('${  e.image  }');" onclick="new Audio('${  e.audioSrc }').play()">
            <div class="head">
              <h3>${  e.word  }</h3>
            </div>
            </div>
            <div class="rotate"></div>
          <div class="back" style="background-image: url('${  e.image  }');">
          <div class="head">
            <h3>${  e.translation  }</h3>
            </div>
            </div>
          </div>`;
          container.append(cards);
        });
      }  
   }
}

document.getElementById('toggle').addEventListener('change', () => {
  container.innerHTML = '';
      container.appendChild(war);
      scoreContainer.innerHTML=''
  document.getElementById('menu').classList.toggle('container-category__item-game')
  const elements = document.getElementsByClassName("container-category__item")
 elements.forEach((e) => {
      e.classList.toggle('container-category__item-game');
  });
});
   function main(){
    container.innerHTML = '';
    container.appendChild(war);
    scoreContainer.innerHTML=''
   }

body.addEventListener('click', (event) => {
  if (event.target.id === 'menu__toggle'){
    document.getElementById('menu').classList.toggle('active-burger');
    document.getElementById('menu-block').classList.toggle('hidden');
    document.getElementById('menu__toggle').style.transform = 'rotate(90deg)';
  }
  if(event.target.id === 'menu-block' ){
    document.getElementById('menu-block').classList.add('hidden');
   document.getElementById('menu__toggle').checked = 0;
  }
  if(event.target.id ==='play-game'){
    game()
    event.target.removeAttribute('id');
    event.target.classList.remove('play')
    event.target.classList.add('repeat')
    event.target.innerText = "";
  }
  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    document.getElementById('menu-block').classList.add('hidden');
    document.getElementById('menu__toggle').checked = 0;
    scoreContainer.innerHTML = ''
    if (event.target.id === 'home') {
      container.innerHTML = '';
      container.appendChild(war);
    }
    if (event.target.id === 'actions') {
      container.innerHTML = '';
      const card1 = new Card(actions);
    }
    if (event.target.id === 'actions2') {
      container.innerHTML = '';
      const card2 = new Card(actions2);
    }
    if (event.target.id === 'animals') {
      container.innerHTML = '';
      const card3 = new Card(animals);
    }
    if (event.target.id === 'animals2') {
      container.innerHTML = '';
      const card4 = new Card(animals2);
    }
    if (event.target.id === 'clothes') {
      container.innerHTML = '';
      const card5 = new Card(clothes);
    }
    if (event.target.id === 'emotions') {
      container.innerHTML = '';
      const card6 = new Card(emotions);
      
    }
    if (event.target.id === 'food') {
      container.innerHTML = '';
      const card7 = new Card(food);
    }
    if (event.target.id === 'items') {
      container.innerHTML = '';
      const card8 = new Card(itemes);
    }
  }
  if (event.target.className === 'rotate'){
    event.target.parentNode.parentNode.classList.add('press');
    event.target.parentNode.classList.add('flip');
  }
  document.querySelectorAll('.cards').forEach((element) =>{
    element.addEventListener('mouseleave', () => {
      if (event.target.className === 'rotate'){
      event.target.parentNode.classList.remove('flip');
      event.target.parentNode.parentNode.classList.remove('press');
      }
      });
  })    
});
body.addEventListener('mousedown', (event) => {
  if (event.target.className === 'front'){
    event.target.parentNode.parentNode.classList.add('press');
    body.addEventListener('mouseup', () => {
      event.target.parentNode.parentNode.classList.remove('press')
    });
  }
});

// GAME
function game(){
  let isGame = true;
  const audioElement = [];
  const elems = document.getElementsByClassName('audio');
  for(let i=0; i < elems.length; i+=1){
    audioElement.push(elems[i])
  }
  audioElement.sort(() => {
  return Math.random() - 0.5;
  })
let counterStar = 0;
function playAudio(){
  const myAudio = new Audio;
  myAudio.src = audioElement[audioElement.length-1].src;
  myAudio.play()
  }
  setTimeout(playAudio,1000)
  body.addEventListener('click', (event)=>{
    if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
      isGame = false;
    }
  });
container.addEventListener('click', (event)=>{
  if (event.target.className === 'repeat'){
    playAudio();
  }
  if(event.target.className === 'front game' && isGame === true){
    if(event.target.className === 'a'){
      isGame = false;
    }
    if (audioElement.length > 1){
  if (audioElement[audioElement.length-1].dataset.word === event.target.id){
      event.target.parentNode.parentNode.classList.add('press')
      const ok = new Audio('audio/correct.mp3')
       ok.play();
       const starWin = document.createElement('div');
       starWin.className='star-win';
       scoreContainer.append(starWin);
       audioElement.pop();
       event.target.classList.add('not') 
      setTimeout(playAudio,1000)
    }
  else { 
      const bed = new Audio('audio/error.mp3')
      bed.play();
      const star = document.createElement('div');
      star.className='star';
      scoreContainer.append(star);
      counterStar += 1;
    }
  } else if (audioElement.length === 1){
    if (counterStar>0){
      container.innerHTML = ''
      container.innerHTML = `<div class="error"><h2>${ counterStar }ERROR</h2><img class="failure" src="img/failure.jpg"></div>`
      const failure = new Audio('audio/failure.mp3')
      failure.play();
      setTimeout(main,3000 )
      isGame = false;
    }
  else {
    container.innerHTML = ''
    container.innerHTML = '<img class="failure" src="img/success.jpg">'
    const success = new Audio('audio/success.mp3')
    success.play();
    setTimeout(main,3000 )
    isGame = false;
  }
  }
}
})
}


