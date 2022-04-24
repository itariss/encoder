re = new RegExp("^[a-z/s ]+$");

function apareceConteudo() {

    document.querySelector("#texto2").value = "";
    document.querySelector("#texto2").classList.remove("background");
    document.querySelector("#gif").classList.remove("z-index");
           
    document.querySelector(".digite").classList.remove("z-index");
    document.querySelector(".nomsg").classList.remove("z-index");

}

function apareceTexto(novoTexto) {

    document.querySelector("#texto2").classList.add("background");
    document.querySelector("#gif").classList.add("z-index");  
    document.querySelector(".digite").classList.add("z-index")
    document.querySelector(".nomsg").classList.add("z-index");
    document.querySelector("#texto2").value = novoTexto;
    document.querySelector("#texto").value = "";
    document.querySelector("#texto").focus();
    event.preventDefault();
    
}

function invalidaMensagem() {
    document.querySelector("#texto").setCustomValidity("Não use letras maiúsculas ou acentos");

}

function apagaAviso() {
    document.querySelector("#texto").setCustomValidity("");

}

function apareceInvalido() {
    document.querySelector(".invalido").style.opacity = "80%"

}

function apagaInvalido() {
    document.querySelector(".invalido").style.opacity = "0%"

}

function apareceCopiado() {
    document.querySelector(".valido").style.opacity = "80%"

}

function apagaCopiado() {
    document.querySelector(".valido").style.opacity = "0%"

}



document.querySelector("#encript").addEventListener("click", () => {
   
    texto = document.querySelector("#texto").value;
    
    if(texto.match(re)) {

        let novoTexto = texto.replace(/e/g, "enter");
        novoTexto = novoTexto.replace(/i/g, "imes");
        novoTexto = novoTexto.replace(/a/g, "ai");
        novoTexto = novoTexto.replace(/o/g, "ober");
        novoTexto = novoTexto.replace(/u/g, "ufat");

        apareceTexto(novoTexto); 

    }else if (!texto.match(re) && texto !== "") {
        
        invalidaMensagem();
        setTimeout(apagaAviso, 1200);

    }

});

document.querySelector("#descript").addEventListener("click", () => {

    texto = document.querySelector("#texto").value;
    

    if(texto.match(re)) {

        let novoTexto = texto.replace(/enter/g, "e");
        novoTexto = novoTexto.replace(/imes/g, "i");
        novoTexto = novoTexto.replace(/alis/g, "a");
        novoTexto = novoTexto.replace(/ober/g, "o");
        novoTexto = novoTexto.replace(/ufat/g, "u");

        apareceTexto(novoTexto);

    }else if(!texto.match(re) && texto !== "") {

        invalidaMensagem();
        setTimeout(apagaAviso, 2000)
        
    }

});

document.querySelector("#copiar").addEventListener("click", () => {
    
    textoCopiado = document.querySelector("#texto2").value;
    
    if(textoCopiado == "") {

        apareceInvalido()
        setTimeout(apagaInvalido, 1200)
        
    }
    
    if(textoCopiado != "") {
        
        textoCopiado = document.querySelector("#texto2").select();
        document.execCommand("copy");
        apareceCopiado()
        setTimeout(apagaCopiado, 1200)
        apareceConteudo();
        document.querySelector("#texto").focus();

    }  

});

document.querySelector("#limpar").addEventListener("click", () => {

    apareceConteudo();
    document.querySelector("#texto").value = "";
    document.querySelector("#texto").focus();

}); 