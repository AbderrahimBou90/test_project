const pgph = document.querySelector('.p')


const changeText = ()=>{
   pgph.innerHTML = `welcome abderrahim to your first uploaded repo on github`
   pgph.style.color = 'pink'
}

pgph.addEventListener('mouseover',changeText)

