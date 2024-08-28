//this keyword

function sayHi(){
    console.log('hi');
    console.log(this);
}
//sayHi();

const person = {
    first: 'chery',
    last: 'sark',
    nickname: 'cher',
    fullname() {
    const {first,last,nickname} = this;
       return `${first} ${last} aka ${nickname}`
    },
    bio(){
        console.log(this);
        return `${this.fullname()} is a person`
    },
    laugh: () => {
        console.log(this);
        console.log(this.fullname()); //refers to window

    }
}
//console.log(person.bio());

//Invocation context
//const printBio = person.bio;
//console.log(printBio()) 
//refers to window not person

const a = 10;
const check = ()=>{
 console.log(this.a);
}
check();

const annoyer = {
    phrases: ['literally','cray cray', 'I cant even',
        'totes','yolo','cant stop, wont stop'
    ],
    pickPhrase(){
        const idx = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[idx]
    },
    start(){
        this.id = setInterval(()=>{
            console.log(this.pickPhrase())
        },3000)
    },
    stop(){
        clearInterval(this.id);
        console.log('its over')
    }
}
// console.log(annoyer);
// console.log(annoyer.start())
// console.log(annoyer.stop())


//My Deck
//by function

// function makeDeck(){
// const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
// const suits = ['Clubs','Spades', 'Hearts', 'Diamonds'];
// const deck = [];
// for(let value of values){
//     for(let suit of suits){
//         deck.push({
//             value,
//             suit
//     })
//     }
// }
// return deck;
// }

// function drawCard(deck, drawnCards){
//     const card = deck.pop();
//     drawnCards.push(card);
//     return card;
// }

// console.log(drawCard(makeDeck(),makeDeck()))
// console.log(makeDeck());

// function drawMultiple(numCards, deck, drawnCards){
//     const cards = [];
//     for (let i = 0; i<numCards; i++){
//         cards.push(drawCard(makeDeck(),makeDeck()));
//     }
//     return cards;
// }
// console.log(drawMultiple(5));

// function shuffle(deck){
//     for (let i = deck.length - 1; i>0;  i--){
//         let j = Math.floor(Math.random()*(i+1));
//         [deck[i],deck[j]]=[deck[j],deck[i]];
//     }
//     return deck
// }

//by object and methods

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['Clubs','Spades', 'Hearts', 'Diamonds'],
    values:  ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    initializeDeck(){
        const {suits,values,deck}=this;
        for (let value of values){
            for (let suit of suits){
                deck.push({value,suit})
            }
        }
        return deck;
    },
    drawCard() {
     const card = this.deck.pop();
     this.drawnCards.push(card);
     return card;
    },
    drawnMultiple(numCards){
     const cards = [];
     for (let i = 0; i < numCards; i++){
        cards.push(this.drawCard());
     }
     return cards;
    },
    shuffle(){
        const {deck} = this;
        for (let i = deck.length; i>0; i--){
         let j = Math.floor(Math.random()*(i+1));
         [deck[i],deck[j]] = [deck[j],deck[i]]; 
        }
        return deck;
    }
}
myDeck.initializeDeck();
myDeck.shuffle();
console.log(myDeck.drawCard());
console.log(myDeck.drawnMultiple(5));
