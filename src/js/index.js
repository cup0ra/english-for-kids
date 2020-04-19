/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import '../css/style.css';
import '../css/style.scss';

import {actions,actions2,animals,animals2,clothes,emotions,food,itemes} from './cards.js';






const MENU = document.getElementById('menu');
const containerCategory = document.getElementById('container');
const container = document.querySelector('main');
const scoreContainer = document.getElementById('score-container')
const war = containerCategory.parentNode.removeChild(containerCategory);
container.append(war);
const MenuToggle = document.getElementById('menu__toggle');
const body = document.querySelector('body');

      MenuToggle.addEventListener('click',(event) => {
          document.getElementById('menu').classList.toggle('active-burger');
          document.getElementById('menu-block').classList.toggle('hidden');
          document.getElementById('menu__toggle').style.transform = 'rotate(90deg)';
      
      MENU.addEventListener('click',(event) => {
          if (event.target.tagName === 'A'){ 
              document.getElementById('menu-block').classList.add('hidden');
              document.getElementById('menu__toggle').checked = 0;
      
          }
      });
      });
const closeBurger = document.getElementById('menu-block');
      closeBurger.addEventListener('click',(event) =>{
          document.getElementById('menu-block').classList.add('hidden');
          document.getElementById('menu__toggle').checked = 0;
         
      });









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
const items = document.getElementsByClassName('container-category__item');
document.getElementById('toggle').addEventListener('change', (event) => {
  container.innerHTML = '';
      container.appendChild(war);
  document.getElementById('menu').classList.toggle('container-category__item-game')
  const elements = document.getElementsByClassName("container-category__item")
 elements.forEach((e) => {
      e.classList.toggle('container-category__item-game');
  
  });

});

const isGame = false;



    // Первое аудио запускаем
 
 
   
   function main(){
    container.innerHTML = '';
    container.appendChild(war);
    scoreContainer.innerHTML=''
   }




body.addEventListener('click', (event) => {
  console.log(event.target.className)
  if(event.target.id ==='play-game'){
   
    game()
  }
  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    scoreContainer.innerHTML = '';
    console.log(event.target.id);
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


function game(){
 
  const audioElement = [];
  const elems = document.getElementsByClassName('audio');
  for(let i=0; i < elems.length; i+=1){
    audioElement.push(elems[i])
  }
  audioElement.sort(() => {
  return Math.random() - 0.5;
  })

let counter = 0;
let counterStar = 0;
function playAudio(){
  const myAudio = new Audio;
  myAudio.src = audioElement[counter].src;
  myAudio.play()
  }
  setTimeout(playAudio(),3000)

container.addEventListener('click', (event)=>{
  console.log(event.target.className)
  if(event.target.className === 'front game'){
    if (counter < 7){
  if (audioElement[counter].dataset.word === event.target.id){
   
      console.log(audioElement[counter].dataset.word)
      event.target.parentNode.parentNode.classList.add('press')
      const ok = new Audio('audio/correct.mp3')
       ok.play();
       const starWin = document.createElement('div');
       starWin.className='star-win';
       scoreContainer.append(starWin);
       counter +=1;
      setTimeout(playAudio(),3000)
      
      console.log(counter)
    
    }
 
  else { 
      const bed = new Audio('audio/error.mp3')
      bed.play();
      const star = document.createElement('div');
      star.className='star';
      scoreContainer.append(star);
      counterStar += 1;
      console.log(counterStar)
    }

  

  } else if (counter === 7){
  if(counterStar === 0){
    container.innerHTML = ''
    container.innerHTML = '<img class="failure" src="img/success.jpg">'
    const success = new Audio('audio/success.mp3')
    success.play();
    setTimeout(main,3000 )

  
  }else {
  container.innerHTML = ''
  container.innerHTML = '<img class="failure" src="img/failure.jpg">'
  const failure = new Audio('audio/failure.mp3')
  failure.play();
  setTimeout(main,3000 )
  
}
  }
  return false
}
return false
})

}


