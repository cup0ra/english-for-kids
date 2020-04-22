/* eslint-disable import/extensions */
/* eslint-disable no-sequences */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */



import '../css/style.css';
import '../css/style.scss';
import {actions,actions2,animals,animals2,clothes,emotions,food,itemes} from './cards.js';
import {staticObject} from './statistic.js';

function addStaticObjectToLocalStorage() {  
  if (localStorage.length === 0){
    localStorage.setItem ("object", JSON.stringify(staticObject))
  }
 
}
addStaticObjectToLocalStorage()

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
      const buttonRepeat = document.createElement('div');
      buttonRepeat.id = 'repeat';
      buttonRepeat.className = 'repeat none';
      container.appendChild(buttonRepeat); 
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
      body.querySelectorAll('a').forEach(el => el.classList.remove('press-link'));
      document.getElementById('home').classList.add('press-link');
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

   body.addEventListener('click',(event) => {
    if (event.target.tagName === 'A'){ 
      body.querySelectorAll('a').forEach(el => el.classList.remove('press-link'));
    }
  });
  
body.addEventListener('click', (event) => {
  if(event.target.id === 'reset'){
    localStorage.clear()
    addStaticObjectToLocalStorage()
    container.innerHTML = ''
    const w = new Statistic( JSON.parse(localStorage.getItem("object"))) 
  }
  if(event.target.className === 'front'){
    const objectStat = JSON.parse(localStorage.getItem("object"))
    console.log(objectStat)
    for(let i = 0; i < objectStat.length; i +=1){
      for(let j = 0; j < objectStat[i].length; j +=1){
        if (event.target.id === objectStat[i][j].word ){
          const elem = objectStat[i][j];
          elem.train +=1;
        }
      }
    }
    localStorage.setItem ("object", JSON.stringify(objectStat))
  }
  
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
    event.target.classList.add('none');
   document.getElementById('repeat').classList.remove('none')
  }
  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    document.getElementById('menu-block').classList.add('hidden');
    document.getElementById('menu__toggle').checked = 0;
    scoreContainer.innerHTML = ''
    if (event.target.dataset.id === 'home') {
      container.innerHTML = '';
      container.appendChild(war);
      document.getElementById('home').classList.add('press-link');
    }
    if (event.target.dataset.id === 'actions' ) {
      container.innerHTML = '';
      const card1 = new Card(actions);
      document.getElementById('actions').classList.add('press-link');
    }
    if (event.target.dataset.id === 'actions2') {
      container.innerHTML = '';
      const card2 = new Card(actions2);
      document.getElementById('actions2').classList.add('press-link');
    }
    if (event.target.dataset.id === 'animals') {
      container.innerHTML = '';
      const card3 = new Card(animals);
      document.getElementById('animals').classList.add('press-link');
    }
    if (event.target.dataset.id === 'animals2') {
      container.innerHTML = '';
      const card4 = new Card(animals2);
      document.getElementById('animals2').classList.add('press-link');
    }
    if (event.target.dataset.id === 'clothes') {
      container.innerHTML = '';
      const card5 = new Card(clothes);
      document.getElementById('clothes').classList.add('press-link');
    }
    if (event.target.dataset.id === 'emotions') {
      container.innerHTML = '';
      const card6 = new Card(emotions);
      document.getElementById('emotions').classList.add('press-link');
      
    }
    if (event.target.dataset.id === 'food') {
      container.innerHTML = '';
      const card7 = new Card(food);
      document.getElementById('food').classList.add('press-link');
    }
    if (event.target.dataset.id === 'items') {
      container.innerHTML = '';
      const card8 = new Card(itemes);
      document.getElementById('items').classList.add('press-link');
    }
    if (event.target.dataset.id === 'statistic') {
      container.innerHTML = '';
      const stateTeble = new Statistic( JSON.parse(localStorage.getItem("object"))) 
      document.getElementById('statistic').classList.add('press-link');
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
  playAudio()
  document.querySelector('.repeat').addEventListener('click',() =>{
   playAudio()
  });
  body.addEventListener('click', (event)=>{
    if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
      isGame = false;
    }
  });
container.addEventListener('click', (event)=>{
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
      const objectStat = JSON.parse(localStorage.getItem("object"))
      console.log(objectStat)
      for(let i = 0; i < objectStat.length; i +=1){
        for(let j = 0; j < objectStat[i].length; j +=1){
          if (event.target.id === objectStat[i][j].word ){
            const elem = objectStat[i][j];
            elem.play +=1;
          }
        }
      }
      localStorage.setItem ("object", JSON.stringify(objectStat))
    }
  else { 
      const bed = new Audio('audio/error.mp3')
      bed.play();
      const star = document.createElement('div');
      star.className='star';
      scoreContainer.append(star);
      counterStar += 1;
      const objectStat = JSON.parse(localStorage.getItem("object"))
      console.log(objectStat)
      for(let i = 0; i < objectStat.length; i +=1){
        for(let j = 0; j < objectStat[i].length; j +=1){
          if (event.target.id === objectStat[i][j].word ){
            const elem = objectStat[i][j];
            elem.playError +=1;
          }
        }
      }
      localStorage.setItem ("object", JSON.stringify(objectStat))
    }
  } else if (audioElement.length === 1){
    if (counterStar>0){
      container.innerHTML = ''
      container.innerHTML = `<div class="error"><h2>${ counterStar }ERROR</h2><img class="failure" src="img/failure.jpg"></div>`
      const failure = new Audio('audio/failure.mp3')
      failure.play();
      setTimeout(main,3000 )
      isGame = false;
      body.querySelectorAll('a').forEach(el => el.classList.remove('press-link'));
      document.getElementById('home').classList.add('press-link');
    }
  else {
    container.innerHTML = ''
    container.innerHTML = '<img class="failure" src="img/success.jpg">'
    const success = new Audio('audio/success.mp3')
    success.play();
    setTimeout(main,3000 )
    isGame = false;
    body.querySelectorAll('a').forEach(el => el.classList.remove('press-link'));
    document.getElementById('home').classList.add('press-link');
  }
  }
}
})
}
// STATISTIC
function Statistic(state){
  const result = document.createElement('div')
  result.className = 'result'
  container.append(result)
  const categoryTable = ['actions','actions2','animals','animals2','clothes','emotions','food','itemes']
  const buttonReset = document.createElement('div')
  buttonReset.id = 'reset'
  buttonReset.innerText = 'RESET'
  result.append(buttonReset)
  const table = document.createElement('table')
  table.id = 'table'
  result.append(table)
  table.innerHTML = '<td>CATEGORY</td><td>WORD</td><td>TRANSLATION</td><td>TRAIN</td><td>PLAY</td><td>PLAY ERROR</td><td>%</td>'
  for(let i = 0, k = 0; i < state.length, k < categoryTable.length; i +=1, k +=1){
    for(let j = 0; j < state[i].length; j +=1){
    const percent =  (state[i][j].playError/(state[i][j].playError + state[i][j].play))*100 || 0
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${ categoryTable[k]}</td><td>${ state[i][j].word  }</td><td>${ state[i][j].translation  }</td><td>${ state[i][j].train }</td><td>${ state[i][j].play  }</td><td>${ state[i][j].playError  }</td><td>${ percent.toFixed(1) }</td>`
    table.append(tr)
  }
  }
}


