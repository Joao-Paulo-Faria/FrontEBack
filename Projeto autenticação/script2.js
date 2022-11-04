let btnlog = document.querySelector('.fa-eye')
btnlog.addEventListener('click',()=>{
let inputSenha =document.querySelector('#senhalog')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})


async function entrar(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senhalog').value
 

    //{ statusCode: 200, data: ... }
    const response = await http.post(`api/cadastro/entrar`, populateFormData({
        usuario, 
        senha
    }))
  
    const resultado = response.data
 
    console.log({resultado})
    console.log({response})
    
    if(!resultado?.codigo)
        return alert("Usuário e/ou senha inválido(s)")

    localStorage.setItem('usuario', JSON.stringify(resultado))
    
    

    location.href = '/index3.html'

   
}


//AQUI
//async function buscarEstados(){
    /** PRIMEIRA OPCAO */
    //const resultado = await http.get(`/api/Estado`);
    //console.log(resultado.data)

    /** SEGUNDA OPCAO */
    //http.get(`/api/Estado`)
    //.then(resultado => {
        //console.log(resultado.data)
    //})
    //.catch(err => {
       // console.log(err)
    //})
//}

//async function cadastrarEstado(){
    //const sigla = document.querySelector('input').value ||
       // $('input').val()
    //const nome = 'Exemplo'
    //const resultado2 = await http.post(`/api/Estado`, {
        //sigla,
        //nome
    //});
    //console.log(resultado2.data)
//}

if(localStorage.getItem('usuario'))
    location.href = 'index3.html'