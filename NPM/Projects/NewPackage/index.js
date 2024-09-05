function isPangram(string){
    let lower = string.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (lower.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

function getCard(){
    let val = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let st = ['Clubs','Spades', 'Hearts', 'Diamonds'];
    let idx = Math.floor(Math.random()*val.length);
    let value = val[idx];
    let stidx = Math.floor(Math.random()*st.length);
    let suit = st[stidx];
    return {Value: value, Suit: suit};
 }

 const makeDogPromise = () => {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const random = Math.random();
        if (random<0.5){
            console.log('YEHHH DOGGGG!!!!');
            resolve();
        }
        else{
            console.log('NO DOG :(');
            reject();
        }
     },5000);
    });
    };


module.exports = {
    isPangram,
    getCard,
    makeDogPromise
}
