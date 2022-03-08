document.addEventListener('DOMContentLoaded', () => {
    //cards
    const cardArray = [{
            name: 'card1',
            img: 'Images/SabaccCard1.png'
        },
        {
            name: 'card1',
            img: 'Images/SabaccCard1.png'
        },
        {
            name: 'card2',
            img: 'Images/SabaccCard2.png'
        },
        {
            name: 'card2',
            img: 'Images/SabaccCard2.png'
        },
        {
            name: 'card3',
            img: 'Images/SabaccCard3.png'
        },
        {
            name: 'card4',
            img: 'Images/SabaccCard4.png'
        },
        {
            name: 'card4',
            img: 'Images/SabaccCard4.png'
        },
        {
            name: 'card5',
            img: 'Images/SabaccCard5.png'
        },
        {
            name: 'card5',
            img: 'Images/SabaccCard5.png'
        },
        {
            name: 'card5',
            img: 'Images/SabaccCard5.png'
        },
        {
            name: 'card6',
            img: 'Images/SabaccCard6.png'
        },
        {
            name: 'card6',
            img: 'Images/SabaccCard6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenID = []
    let cardsWon = []

    //game board for the background
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'Images/background.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]

        if (optionOneID == optionTwoID) {
            cards[optionOneID].setAttribute('src', 'Images/background.jpg')
            cards[optionTwoID].setAttribute('src', 'Images/background.jpg')
            alert('Same image clicked.')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneID].setAttribute('src', 'Images/flash.jpg')
            cards[optionTwoID].setAttribute('src', 'Images/flash.jpg')
            cards[optionOneID].removeEventListener('click', flipCard)
            cards[optionTwoID].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute('src', 'Images/background.jpg')
            cards[optionTwoID].setAttribute('src', 'Images/background.jpg')
            alert('Sorry, try again.')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all the matches.'
        }
    }

    function flipCard() {
        let cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})