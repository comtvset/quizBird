const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');


//BODY
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

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
logoBird.setAttribute('src', '/assets/icon/logo_bird_c.png');
logoBird.setAttribute('alt', 'logo');

const headerEl = document.createElement('div');
logoContainer.appendChild(headerEl);
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

// const greetingsHead = document.createElement('h1');
// greetingsHead.textContent = 'Welcome!';
// greetings.appendChild(greetingsHead);
// greetingsHead.className = 'lng-greetings-head';

// const greetingsText = document.createElement('div');
// greetingsText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eaque officiis perspiciatis pariatur, debitis cum temporibus, exercitationem tempora fugit modi, laborum ipsam provident sed. Laborum facilis non neque soluta eaque.';
// greetings.appendChild(greetingsText);
// greetingsText.className = 'lng-greetings-text';

// const langContainer = document.createElement('div');
// greetings.appendChild(langContainer);
// langContainer.className = 'lang-container';

// const langText = document.createElement('div');
// langText.textContent = 'language';
// langContainer.appendChild(langText);
// langText.className = 'lng-lang-text';

// const langSelect = document.createElement('select');
// langContainer.appendChild(langSelect);
// langSelect.className = 'lang-select';

// const langOptionEN = document.createElement('option');
// langSelect.appendChild(langOptionEN);
// langOptionEN.setAttribute('value', 'en');
// langOptionEN.textContent = 'EN'

// const langOptionRU = document.createElement('option');
// langSelect.appendChild(langOptionRU);
// langOptionRU.setAttribute('value', 'ru');
// langOptionRU.textContent = 'RU'


// const playGame = document.createElement('a');
// greetings.appendChild(playGame);
// playGame.className = 'btn-flip';
// playGame.setAttribute('data-play', 'Play');
// playGame.setAttribute('data-go', 'Let\'s go');


//game
const game = document.createElement('div');
mainContainer.appendChild(game);
game.className = 'no-game';

const questionContainer = document.createElement('div');
game.appendChild(questionContainer);
questionContainer.className = 'question-container';

const questionPictures = document.createElement('img');
questionContainer.appendChild(questionPictures);
questionPictures.className = 'question-pictures';
questionPictures.setAttribute('src', 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg')

const questionInfoContainer = document.createElement('div');
questionContainer.appendChild(questionInfoContainer);
questionInfoContainer.className = 'question-info-container';

const questionTitle = document.createElement('div');
questionTitle.textContent = '******';
questionInfoContainer.appendChild(questionTitle);
questionTitle.className = 'lng-question-title';


// -- player --
const questionPlayer = document.createElement('audio');
questionInfoContainer.appendChild(questionPlayer);
questionPlayer.className = 'audio';
questionPlayer.setAttribute('src', 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3');
// questionPlayer.setAttribute('controls', 'controls')

const progressContainer = document.createElement('div');
questionInfoContainer.appendChild(progressContainer);
progressContainer.className = 'progress-container';

const progress = document.createElement('div');
progressContainer.appendChild(progress);
progress.className = 'progress';

const time = document.createElement('div');
questionInfoContainer.appendChild(time);
time.className = 'time';

const timeProgress = document.createElement('div');
time.appendChild(timeProgress);
timeProgress.textContent = '00:00';
timeProgress.className = 'time-progress';

const timeFull = document.createElement('div');
time.appendChild(timeFull);
timeFull.textContent = '01:20';
timeFull.className = 'time-full';

const controls = document.createElement('div');
questionInfoContainer.appendChild(controls);
controls.className = 'controls';

const play = document.createElement('button');
controls.appendChild(play);
play.className = 'play';

const replay = document.createElement('button');
controls.appendChild(replay);
replay.className = 'replay';

const playIMG = document.createElement('img');
play.appendChild(playIMG);
playIMG.className = 'play-img';
playIMG.setAttribute('src', '/assets/icon/play.png');
playIMG.setAttribute('alt', 'play');

const replayIMG = document.createElement('img');
replay.appendChild(replayIMG);
replayIMG.className = 'replay-img';
replayIMG.setAttribute('src', '/assets/icon/replay.png');
replayIMG.setAttribute('alt', 'replay');

const volume = document.createElement('input');
questionInfoContainer.appendChild(volume);
volume.className = 'volume';
// volume.setAttribute('value', '#ff0000');
volume.setAttribute('type', 'range');
volume.setAttribute('min', '0');
volume.setAttribute('max', '100');


// -- --

const wrapperMiddle = document.createElement('div');
game.appendChild(wrapperMiddle);
wrapperMiddle.className = 'wrapper-middle';


const choiceContainer = document.createElement('div');
choiceContainer.textContent = 'choice-container';
wrapperMiddle.appendChild(choiceContainer);
choiceContainer.className = 'choice-container';

const answerContainer = document.createElement('div');
answerContainer.textContent = 'answer-container';
wrapperMiddle.appendChild(answerContainer);
answerContainer.className = 'answer-container';

const next = document.createElement('div');
next.textContent = 'next';
game.appendChild(next);
next.className = 'next';


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
gitIcon.setAttribute('src', '/assets/icon/GitHub-Mark-32px(white).png');
gitIcon.setAttribute('alt', 'github');


const school = document.createElement('a');
footerContainer.appendChild(school);
school.setAttribute('href', 'https://rs.school/js');
const schoolIcon = document.createElement('img');
school.appendChild(schoolIcon);
schoolIcon.className = 'footer-el';
schoolIcon.setAttribute('src', '/assets/icon/rs_school_js.png');
schoolIcon.setAttribute('alt', 'rs_school');


//language
const allLang = ['en', 'ru'];

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
}

changeLang();

play.addEventListener('click', () => {
    greetings.classList.add('no-greetings');
    game.classList.add('game');
  });