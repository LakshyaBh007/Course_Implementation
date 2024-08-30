//Given in Starter Pack
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

//Code
const thor = document.querySelector('#thor');
const mjolnir = document.querySelector('#mjolnir');

document.body.style.backgroundColor = 'darkblue';

window.addEventListener('keyup', function(e){
   if(e.key === 'ArrowDown' || e.key === 'Down' || e.key === 's'){
   moveVertical(thor,50);
   } 
   else if (e.key === 'ArrowUp' || e.key === 'Up' || e.key === 'w'){
   moveVertical(thor,-50);
   }
   else if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'd'){
   moveHorizontal(thor,50);
   thor.style.transform = 'scale(1,1)';
   }
   else if (e.key === 'ArrowLeft' || e.key === 'Left' || e.key === 'a'){
   moveHorizontal(thor,-50);
   thor.style.transform = 'scale(-1,1)';
   }
   if (isTouching(thor,mjolnir)) moveMjolnir();
})

const moveVertical = (element,amount)=>{
   const currTop = extractPos(element.style.top);
   element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element,amount)=>{
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos)=>{
	if (!pos) return 100;
	return parseInt(pos.slice(0,-2)); //making number
}

const moveMjolnir = ()=>{
	const x = Math.floor(Math.random()*window.innerHeight);
	const y = Math.floor(Math.random()*window.innerWidth);
	mjolnir.style.top = `${x}px`;
	mjolnir.style.left = `${y}px`;
}

moveMjolnir();