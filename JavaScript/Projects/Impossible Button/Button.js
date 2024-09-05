const btn = document.querySelector('button');
btn.addEventListener('mouseover',function(){
    console.log('Moused over me!');
    const w = Math.floor(Math.random()*window.innerWidth);
    const h = Math.floor(Math.random()*window.innerHeight);
    btn.style.left = `${w}px`;
    btn.style.top = `${h}px`;
})

btn.addEventListener('click',function(){
    btn.innerText = 'you got me';
    document.body.style.backgroundColor = 'green';
})