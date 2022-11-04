if(!localStorage.getItem('usuario')){
    alert('Você precia está logado para acessar essa página!')
    location.href='http://127.0.0.1:5500/index.html'
}

let userlogado = JSON.parse(localStorage.getItem('usuario'))
let logado = document.querySelector('#logado')
logado.innerHTML =`Olá ${userlogado.nome}`


function sair(){
    localStorage.removeItem('usuario')
    
    location.href='http://127.0.0.1:5500/index.html'
}