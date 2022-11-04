let nome = document.querySelector("#nome")
let labelnome = document.querySelector("#labelnome")
let validnome = false

let usuario = document.querySelector("#usuario")
let labelusuario = document.querySelector("#labelusuario")
let validusuario = false

let senha = document.querySelector("#senha")
let labelsenha = document.querySelector("#labelsenha")
let validsenha = false

let confirmesenha = document.querySelector("#confirmesenha")
let labelconfirmesenha = document.querySelector("#labelconfirmesenha")
let validconfirmesenha = false

let msgError =document.querySelector("#msgError")
let msgSuccess =document.querySelector("#msgSuccess")

nome.addEventListener('keyup', ()=>{
    if(nome.value.length<=2){
        labelnome.setAttribute('style','color:red')
        labelnome.innerHTML='Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style','border-color:red')
        validnome = false
        
        
    } else {
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML='Nome'
        nome.setAttribute('style','border-color:green')
        validnome = true
      
       
        
    }
})
nome.addEventListener('keyup', ()=>{
    if(nome.value.length==0){
        labelnome.setAttribute('style','color:#272262')
        labelnome.innerHTML='Nome' 
        nome.setAttribute('style','border-color:#1e231d')
        validnome = false
        
    }
})

usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length<=4){
        labelusuario.setAttribute('style','color:red')
        labelusuario.innerHTML='Usuário *Insira no mínimo 5 caracteres'
        usuario.setAttribute('style','border-color:red')
        validusuario = false
        
        
    } else {
        labelusuario.setAttribute('style','color:green')
        labelusuario.innerHTML='Usuário'
        usuario.setAttribute('style','border-color:green')
        validusuario = true
       
        
    }
})
usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length==0){
        labelusuario.setAttribute('style','color:#272262')
        labelusuario.innerHTML='Usuário' 
        usuario.setAttribute('style','border-color:#1e231d')
        validusuario = false
        
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length<=5){
        labelsenha.setAttribute('style','color:red')
        labelsenha.innerHTML='Senha *Insira no mínimo 6  caracteres'
        senha.setAttribute('style','border-color:red')
        validsenha = false
    } else {
        labelsenha.setAttribute('style','color:green')
        labelsenha.innerHTML='Senha'
        senha.setAttribute('style','border-color:green')
        validsenha = true
    }
})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length==0){
        labelsenha.setAttribute('style','color:#272262')
        labelsenha.innerHTML='Senha' 
        senha.setAttribute('style','border-color:#1e231d')
        validsenha = false
    }
})

confirmesenha.addEventListener('keyup', ()=>{
    if(senha.value!=confirmesenha.value){
        labelconfirmesenha.setAttribute('style','color:red')
        labelconfirmesenha.innerHTML='Confirmar Senha *As senhas não conferem'
        confirmesenha.setAttribute('style','border-color:red')
        validconfirmesenha = false
        
    } else {
        labelconfirmesenha.setAttribute('style','color:green')
        labelconfirmesenha.innerHTML='Senha'
        confirmesenha.setAttribute('style','border-color:green')
        validconfirmesenha = true
    }
})
confirmesenha.addEventListener('keyup', ()=>{
    if(confirmesenha.value.length==0){
        labelconfirmesenha.setAttribute('style','color:#272262')
        labelconfirmesenha.innerHTML='Confirmar Senha' 
        confirmesenha.setAttribute('style','border-color:#1e231d')
        validconfirmesenha = false
        
    }
})


async function cadastrar(){

   // fetch('https://localhost:7272/WeatherForecast')
    //.then((response) => response.json())
    //.then((data) => console.log(data));
   if(validconfirmesenha==false){
    return
   }
    let nome = document.getElementById('nome').value || $('nome').val();
    let usuario = document.getElementById('usuario').value || $('usuario').val();
    let senha = document.getElementById('senha').value || $('senha').val();
    
    http.post(`api/Cadastro`, {
        nome,
        usuario,
        senha
    })
    .then(resultado => {
        console.log(resultado.data)
    })
    .catch(err => {
        console.log(err)
    })
    .catch((error) => console.log( error.response.request._response ) )
    

    
     if(validnome && validusuario && validsenha && validconfirmesenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

            listaUser.push(
                {
                   nomecad: nome.value,
                   usercad: usuario.value,
                   senhacad: senha.value
                   
                }
            )

            localStorage.setItem('listaUser',JSON.stringify(listaUser))


        msgSuccess.setAttribute('style','display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário, favor aguardar...</strong>'
        msgError.setAttribute('style','display:none')
        msgError.innerHTML = ''
        setTimeout(()=>{
            window.location.href='http://127.0.0.1:5500/index.html'
        }, 3000)
        
    } else{
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style','display:none')
    }
    
}


let btn = document.querySelector('#versenha')
btn.addEventListener('click',()=>{
let inputSenha =document.querySelector('#senha')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})



let btnconfirm = document.querySelector('#verconfirmesenha')
btnconfirm.addEventListener('click',()=>{
let inputSenha =document.querySelector('#confirmesenha')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})
 




