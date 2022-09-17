const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')

const diceEl = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')



let score, currentScore, activePlayer, playing

// let score = [0, 0]
// let currentScore = 0
// let activePlayer = 0
// let playing = true

const savebtn = function(){
   score = [0, 0]
   currentScore = 0
   activePlayer = 0
   playing = true

   score0El.textContent = 0
   score1El.textContent = 0

   score0El.textContent = 0
   score1El.textContent = 0
   current0El.textContent = 0
   current1El.textContent = 0

   diceEl.classList.add('hidden');
   player0El.classList.add('player--active')
   player0El.classList.remove('player--winner')
   player1El.classList.remove('player--active')
   player1El.classList.remove('player--winner')
   
}
savebtn()

const switches = function(){
   document.getElementById(`current--${activePlayer}`).textContent = 0
   currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')

}

btnRoll.addEventListener('click', function(){
   if(playing){
   const num = Number(Math.trunc(Math.random() * 6 ) + 1)
   
   diceEl.classList.remove('hidden')
   diceEl.src = `dice-${num}.png`

   if(num !== 1){
    currentScore += num
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
   //  player0El.classList.add('player--active')
   //  player1El.classList.remove('player--active')
    }
   else{
      switches()
   }
    }
})

btnHold.addEventListener('click', function(){
   // document.getElementById(`score--${activePlayer}`).textContent = currentScore
   // document.getElementById(`current--${activePlayer}`).textContent = 0
   // currentScore = 0
   // activePlayer = activePlayer === 0 ? 1 : 0
   // player0El.classList.toggle('player--active')
   // player1El.classList.toggle('player--active')

   if(playing){
   score[activePlayer] += currentScore
   document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
   
   if(score[activePlayer] >= 10){
      playing = false
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
   }
   else{
      switches()
   }
   }
})

btnNew.addEventListener('click', savebtn)

// btnNew.addEventListener('click', function(){
//    score = [0, 0]
//    currentScore = 0
//    activePlayer = 0
//    playing = true

//    score0El.textContent = 0
//    score1El.textContent = 0

//    score0El.textContent = 0
//    score1El.textContent = 0
//    current0El.textContent = 0
//    current1El.textContent = 0

//    diceEl.classList.add('hidden');
//    player0El.classList.add('player--active')
//    player0El.classList.remove('player--winner')
//    player1El.classList.remove('player--active')
//    player1El.classList.remove('player--winner')
// })