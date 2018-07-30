let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function letterToWord(letter){
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'scissors';

}

function win(user, comp){
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${letterToWord(user)}${smallUserWord} beats ${letterToWord(comp)}${smallCompWord} you win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);

}

function lose(user, comp){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${letterToWord(user)}${smallUserWord} loses to ${letterToWord(comp)}${smallCompWord} you lost! `;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(user, comp){
  const userChoice_div = document.getElementById(user);
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${letterToWord(user)}${smallUserWord} equals ${letterToWord(comp)}${smallCompWord} it's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 1000);
}


function game(userChoice) {
  const compChoice = getComputerChoice();
  switch(userChoice + compChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, compChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, compChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, compChoice);
      break;
  }
}

function main(){
rock_div.addEventListener('click', () => game('r'));
paper_div.addEventListener('click', () => game('p'));
scissors_div.addEventListener('click', () => game('s'));
}

main();
