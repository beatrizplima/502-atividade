// function mostrarMouse(event){
//     if(event.pageX >= 1220 || event.pageY <= 10){
//         alert("Não saia, cada vez que você sai do site um gatinho morre");
//     }
// }

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoSou = document.querySelector("a");
let dn = document.querySelector("h3");

if(localStorage.nome){
    texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;
    localStorage.setItem('nome', caixaTexto.value);
    naoSou.innerHTML = `Não é ${localStorage.nome}?`; 
    caixaTexto.style.display = "none";
    botao.style.display = "none";
    dn.style.display = "none";
}
else{
    texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;
    localStorage.setItem('nome', caixaTexto.value);
    naoSou.innerHTML = `Não é ${localStorage.nome}?`;
    function acessar()
}
function  limpar(){
    localStorage.clear();
}

botao.onclick = acessar;
naoSou.onclick = limpar;
