let isAlive = false
let won = false
let user = {name: '', chips: 0}
let cards = []
let sum = 0


const chipsUi = document.getElementById('chips')
const cardUi = document.getElementById('card-ui')
const sumUi = document.getElementById('sum-ui')
const message = document.getElementById('message')
const nameInput = document.getElementById("ask-name")
const submitName = document.getElementById("submit-name")
const ques = document.getElementById('name')

function randomCard() {
    let random = Math.floor( Math.random() * 13 ) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}
function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    won = false
    chipsUi.textContent = user.name + ': $' + user.chips 
    renderGame()
}
function renderGame() {
    cardUi.textContent = 'Sum: '
    for (let i = 0; i < cards.length; i++) {
        cardUi.textContent += cards[i] + ' '
    }
    sumUi.textContent = 'Sum: ' + sum
    if (sum > 21) {
        message.textContent = "You're out of the game!"
        isAlive = false
        user.chips -= 5
    } else if (sum === 21) {
        message.textContent = "You've got the blackjack!"
        won = true
        user.chips += 50
    } else {
        message.textContent = "Do you want to draw a new card?"
    }
    chipsUi.textContent = user.name + ": $" + user.chips
}
function newCard() {
    if (isAlive === true && won === false) {
        let card = randomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
        submitName.addEventListener('click', function () {
            user.name = nameInput.value.trim()
            if (user.name !== '') {
                hidden.style.display = 'block'
                nameInput.parentNode.removeChild(nameInput)
                submitName.parentNode.removeChild(submitName)
                ques.parentNode.removeChild(ques)
            } else {
                hidden.style.display = 'none'
            }
        })