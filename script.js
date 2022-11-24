// import { mapArray, mapObject } from './modules/functions.js';
import birdsData from './modules/birds.js';
import birdsDataEn from './modules/birds-en.js';
import translate from './translate.js';
// import mapObject from './modules/testFunc.js';
import {Player} from './player.js';

const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

// console.log(mapArray(birdsData[1], 'id'));
// console.log(mapObject(birdsData[1], 'id'));

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

window.randA = randomInteger(0, 5);
window.randB = randomInteger(0, 5);
// console.log(randA)
// console.log(randB)

//BODY
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);


body.className = 'body';
main.className = 'main';
footer.className = 'footer';

//HEADER
header.className = 'header';
const headerContainer = document.createElement('div');
header.appendChild(headerContainer);
headerContainer.className = 'header-container';

const logoContainer = document.createElement('a');
headerContainer.appendChild(logoContainer);
logoContainer.className = 'logo-container';

const logoBird = document.createElement('img');
logoContainer.appendChild(logoBird);
logoBird.className = 'logo-bird';
logoBird.setAttribute('src', './assets/icon/logo_bird_c.png');
logoBird.setAttribute('alt', 'logo');

const headerEl = document.createElement('div');
headerContainer.appendChild(headerEl);
headerEl.className = 'header-el';

const score = document.createElement('div');
score.textContent = 'score: 5';
headerEl.appendChild(score);
score.className = 'lng-score';

const round = document.createElement('div');
round.textContent = 'round: 1';
headerEl.appendChild(round);
round.className = 'lng-round';

//MAIN
main.className = 'main';
const mainContainer = document.createElement('div');
main.appendChild(mainContainer);
mainContainer.className = 'main-container';

const greetings = document.createElement('div');
mainContainer.appendChild(greetings);
greetings.className = 'greetings';

const greetingsHead = document.createElement('h1');
greetingsHead.textContent = 'Welcome!';
greetings.appendChild(greetingsHead);
greetingsHead.className = 'lng-greetings-head';

const greetingsText = document.createElement('div');
greetingsText.textContent = 'UPS.....';
greetings.appendChild(greetingsText);
greetingsText.className = 'lng-greetings-text';

const langContainer = document.createElement('div');
greetings.appendChild(langContainer);
langContainer.className = 'lang-container';

const langText = document.createElement('div');
langText.textContent = 'language';
langContainer.appendChild(langText);
langText.className = 'lng-lang-text';

const langSelect = document.createElement('select');
langContainer.appendChild(langSelect);
langSelect.className = 'lang-select';

const langOptionEN = document.createElement('option');
langSelect.appendChild(langOptionEN);
langOptionEN.setAttribute('value', 'en');
langOptionEN.textContent = 'EN'

const langOptionRU = document.createElement('option');
langSelect.appendChild(langOptionRU);
langOptionRU.setAttribute('value', 'ru');
langOptionRU.textContent = 'RU'


const playGame = document.createElement('a');
greetings.appendChild(playGame);
playGame.className = 'btn-flip';
playGame.setAttribute('data-play', 'Play');
playGame.setAttribute('data-go', 'Let\'s go');


//game
const game = document.createElement('div');
mainContainer.appendChild(game);
game.className = 'no-game';

const questionContainer = document.createElement('div');
game.appendChild(questionContainer);
questionContainer.className = 'question-container';

let player = new Player(questionContainer);



// -- choice --

const wrapperMiddle = document.createElement('div');
game.appendChild(wrapperMiddle);
wrapperMiddle.className = 'wrapper-middle';


const choiceContainer = document.createElement('div');
// choiceContainer.textContent = 'choice-container';
wrapperMiddle.appendChild(choiceContainer);
choiceContainer.className = 'choice-container';


class Choice {
    constructor(name,ps) {
        const choiceText = document.createElement('div');
        choiceContainer.appendChild(choiceText);
        choiceText.className = 'choice-text';

        const choice = document.createElement('input');
        choiceText.appendChild(choice);
        choice.className = 'choice';
        choice.setAttribute('type', 'radio');
        choice.setAttribute('name', 'choice');

        const ch = document.createElement('span');
        this.ch;
        ch.textContent = name;
        choiceText.appendChild(ch);
        ch.className = 'ch-text';
        // добавил id для более легкого доступа и последующей смены названий птиц для выбора
        ch.setAttribute('id', 'choice'+ps);
        // Событие на клик, когда выбирается один из вариантов ответа
        choice.onclick=ChoiceDone;
        // Тут сохраняется номер птицы в списке, чтобы потом можно было легко в обработчике
        // клика узнать по какой именно птице кликнули
        choice.dataset['ps']=ps;
    }
}
// Тут передаю еще и номер птицы в списке
let ch1 = new Choice('Ворон',1);
let ch2 = new Choice('Журавль',2);
let ch3 = new Choice('Ласточка',3);
let ch4 = new Choice('Орел',4);
let ch5 = new Choice('Пингвин',5);
let ch6 = new Choice('Курица',6);


const answerContainer = document.createElement('div');
wrapperMiddle.appendChild(answerContainer);
answerContainer.className = 'answer-container';
const listenText = document.createElement('p');
wrapperMiddle.appendChild(listenText);
listenText.className = 'lng-listen-text';
listenText.innerText = 'Послушайте плеер. Выберите птицу из списка';

let player2 = new Player(answerContainer);


const next = document.createElement('a');
game.appendChild(next);
next.className = 'btn-flip';
next.setAttribute('data-play', 'Next');
next.setAttribute('data-go', 'Click');


//FOOTER
footer.className = 'footer';
const footerContainer = document.createElement('div');
footer.appendChild(footerContainer);
footerContainer.className = 'footer-container';

const gitHub = document.createElement('a');
footerContainer.appendChild(gitHub);
gitHub.setAttribute('href', 'https://github.com/comtvset');
const gitIcon = document.createElement('img');
gitHub.appendChild(gitIcon);
gitIcon.className = 'footer-el';
gitIcon.classList.add('size-icon32');
gitIcon.setAttribute('src', './assets/icon/GitHub-Mark-32px(white).png');
gitIcon.setAttribute('alt', 'github');


const school = document.createElement('a');
footerContainer.appendChild(school);
school.setAttribute('href', 'https://rs.school/js');
const schoolIcon = document.createElement('img');
school.appendChild(schoolIcon);
schoolIcon.className = 'footer-el';
schoolIcon.setAttribute('src', './assets/icon/rs_school_js.png');
schoolIcon.setAttribute('alt', 'rs_school');

const intro = document.createElement('div');
body.appendChild(intro);
intro.className = 'intro';


//language
const allLang = ['en', 'ru'];

let data;

langSelect.addEventListener('change', changeURLLang);
function changeURLLang() {
    let lang = langSelect.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    langSelect.value = hash;

    for(let key in translate) {
        document.querySelector('.lng-' + key).textContent = translate[key][hash];
    }
    if(langSelect.value == 'en') {
        data = birdsDataEn;
    }
    else {data = birdsData;}

}

changeLang();


// next.addEventListener('click', () => {
//     header.classList.add('no-greetings');
//     main.classList.add('no-greetings');
//     footer.classList.add('no-greetings');

// });


playGame.addEventListener('click', () => {
    greetings.classList.add('no-greetings');
    game.classList.add('game');
});


// Дальше пошел мой код

let TopPlayerAudio;
let TopPlayerImage;
let TopPlayerTitle;
let TopPlayerDiscription;
let RightPlayerAudio;
let RightPlayerImage;
let RightPlayerTitle;
let RightPlayerDiscription;
let step=0;
let ps;
let rd = 1;

NextStep();

function NextStep(){// Очередной шаг игры
  document.querySelector(".question-pictures").src="./assets/icon/songBirdQuestion.png"; // тут поставить картинку неизвестной птицы
  document.querySelector(".lng-question-title").textContent = '*******';
  document.querySelector(".species").textContent = '';
  console.log(ps=Math.round(Math.random()*data[step].length)); // ?????? выбираем случайную птицу из группы
  TopPlayerAudio=document.querySelector(".question-info-container .audio");
  TopPlayerAudio.src=data[step][ps].audio; // даем верхнему плееру голос этой птицы
  // прячем правый плеер. Тут в оригинале оно не полностью прячется, можешь допилить на свой вкус
  document.querySelector(".answer-container").style.display = "none";
  document.querySelector(".lng-listen-text").style.display = "flex";
  document.querySelector(".lng-listen-text").style.display = "listen-text";
  // заполняем список вариантов для ответа названиями птиц этого шага.
  document.querySelector("#choice1").textContent = data[step][0].name;
  document.querySelector("#choice2").textContent = data[step][1].name;
  document.querySelector("#choice3").textContent = data[step][2].name;
  document.querySelector("#choice4").textContent = data[step][3].name;
  document.querySelector("#choice5").textContent = data[step][4].name;
  document.querySelector("#choice6").textContent = data[step][5].name;
  round.textContent = `round: ${rd++}`;
}

function ChoiceDone(){ // вызывается при выборе варианта ответа
  // останавливаем верхний плеер, нужно наверное и картинку на кнопке менять
  // на паузу, оставлю это тебе'
//   TopPlayerAudio.pause();

  document.querySelector(".lng-listen-text").style.display = "none";
  RightPlayerAudio=document.querySelector(".answer-container .audio");
  RightPlayerImage=document.querySelector(".answer-container .question-pictures");
  RightPlayerTitle=document.querySelector(".answer-container .lng-question-title");
  RightPlayerDiscription=document.querySelector(".answer-container .lng-description");

  TopPlayerImage=document.querySelector(".question-container .question-pictures");
  TopPlayerTitle=document.querySelector(".question-container .lng-question-title");
  TopPlayerDiscription=document.querySelector(".question-container .lng-description");
  // тут узнаем номер выбранного варианта ответа
  let choiceps=this.dataset['ps']-1;
  if (choiceps!=ps){ // выбран неправильный ответ
    // отображаем правый плеер
    document.querySelector(".answer-container").style.display = "block";
    // подставляем правому плееру голос выбранной пользователем птицы
    // нужно еще наверное добавить ее название, описание и т.п.
    RightPlayerAudio.src=data[step][choiceps].audio;
    RightPlayerImage.src=data[step][choiceps].image;
    RightPlayerTitle.textContent=data[step][choiceps].name;
    RightPlayerDiscription.textContent=data[step][choiceps].description;
    next.classList.add('btn-flip-disable');
  }
  else if(choiceps==ps){// выбран правильный ответ
    // Переходим к следующему шагу и списку птиц. Если делать как в примере,
    // то тут должна становиться доступной кнопка NEXT и только по ее нажатию
    // переход дальше. Но чтото у тебя кнопка какаято хитровыебанная и я не понял
    // с ходу как она у  тебя работает :) Поэтому сделал переход сразу.

    document.querySelector(".answer-container").style.display = "block";
    RightPlayerAudio.src=data[step][choiceps].audio;
    RightPlayerImage.src=data[step][choiceps].image;
    RightPlayerTitle.textContent=data[step][choiceps].name;
    RightPlayerDiscription.textContent=data[step][choiceps].description;

    TopPlayerImage.src=data[step][choiceps].image;
    TopPlayerTitle.textContent=data[step][choiceps].name;
    TopPlayerDiscription.textContent=data[step][choiceps].description;
    next.classList.remove('btn-flip-disable');

    // step++;

    next.addEventListener('click', () => {
        step++;
        NextStep();
      })

    // К следующему шагу переходим только если еще не все птицы пройдены.
    // Если все пройдены, то я не знаю что делать, можешь добавить какие-то действия
    // в else
    // if(step<birdsData.length)
    //   NextStep();

    // if(step >= birdsData.length-1)
    //   NextStep();
  }
//   else if(step<birdsData.length)
//       NextStep();
}



// alert('Привет! Прошу проверить работу в последний день Deadline. Функционал в процессе разработки')
