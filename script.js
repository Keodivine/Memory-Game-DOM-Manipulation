
const cards = [];
for (let i = 0; i < 8; i++) {
    cards.push({ letter: String.fromCharCode(65 + i), id: i });
    cards.push({ letter: String.fromCharCode(65 + i), id: i });
}
cards.sort(() => Math.random() - 0.5);


const gameBoard = document.querySelector('.game-board');
for (let i = 0; i < 16; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = i;
    card.innerHTML = '';
    gameBoard.appendChild(card);
    card.addEventListener('click', flipCard);
}

let flippedCards = [];
let matchedCards = [];

function flipCard(event) {
    const card = event.target;
    if (flippedCards.length < 2 &&!card.classList.contains('matched')) {
        card.classList.add('flipped');
        flippedCards.push({ card, letter: cards[card.dataset.id].letter });
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.letter === card2.letter) {
        card1.card.classList.add('matched');
        card2.card.classList.add('matched');
        matchedCards.push(card1.card);
        matchedCards.push(card2.card);
    } else {
        card1.card.classList.remove('flipped');
        card2.card.classList.remove('flipped');
    }
    flippedCards = [];
    if (matchedCards.length === 16) {
        alert('Congratulations! You won the game!');
    }
}