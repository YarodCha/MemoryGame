document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'aquamarine',
            img: 'images/aquamarine.png'
        },
        {
            name: 'aquamarine',
            img: 'images/aquamarine.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
    ]

    const grid = document.querySelector('.grid')
    var result = document.querySelector('#result')    
    var cardsChosen = []
    var cardsChosenId = []
    var pairsFounded = 0
    
    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {     
        var cards = document.querySelectorAll('img')   
        console.log(cardsChosen)
        if (cardsChosen[0] === cardsChosen[1]) {
            cardsChosenId.map(id => {
                cards[id].setAttribute('src', 'images/white.png')
            })
            pairsFounded++
            cardsChosen = []
            cardsChosenId = []
        } else {
            cardsChosenId.map(id => {
                cards[id].setAttribute('src', 'images/blank.png')
            })
            cardsChosen = []
            cardsChosenId = []
        }
        
        result.textContent = pairsFounded
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        if (cardsChosenId.includes(cardId)) {
            return
        }
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    //Ordenando el board
    cardArray.sort(() => 0.5 - Math.random())
    createBoard()
})