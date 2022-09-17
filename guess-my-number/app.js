 'use strict'
// console.log(document.querySelector('.message').textContent )
// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 12
// console.log(document.querySelector('.guess').value)

const check = document.querySelector('.check')
let score = 20
let highscore = 0
let num = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = '?'
const again = document.querySelector('.again')


check.addEventListener('click', function(){
  const guess = document.querySelector('.guess').value

  if(!guess){
    document.querySelector('.message').textContent = 'No number'
  }
  else if(guess == num){
    document.querySelector('.message').textContent = 'Correct Number'
    //style
    document.querySelector('body').style.background = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = num
  
    if(score > highscore){
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
  else if (guess >= num){
    if(score > 1){
    document.querySelector('.message').textContent = 'To hight'
    score--
    document.querySelector('.score').textContent = score
    }
    else{
      document.querySelector('.message').textContent = 'You Lost The Game'
      document.querySelector('.score').textContent = 0
    }
  }
  else if (guess <= num){
    if(score > 1){
    document.querySelector('.message').textContent = 'To Low'
    score--
    document.querySelector('.score').textContent = score 
    }
    else{
      document.querySelector('.message').textContent = 'You Lost The Game'
      document.querySelector('.score').textContent = 0

    }
  
  }

})

again.addEventListener('click', function(){
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20
  document.querySelector('.message').textContent = 'Start guessing'
  document.querySelector('.score').textContent = score
  document.querySelector('.guess').value = ''
  
  document.querySelector('body').style.background = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'

})