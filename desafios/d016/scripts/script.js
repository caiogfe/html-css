const itens = document.querySelector('nav#menu')
const burger = document.querySelector('span#burger')

function mudouTamanho() {
    if (window.innerWidth >= 769) {
        itens.style.display = 'flex'
        burger.style.display = 'none'
    } else {
        itens.style.display = 'none'
        burger.style.display = 'flex'
    }
}

function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}