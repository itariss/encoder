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
    document.querySelector("#texto").setCustomValidity("Texto Inválido");

}

document.querySelector("#encript").addEventListener("click", () => {
   
    texto = document.querySelector("#texto").value;
    
    if(texto.match(re)) {

        let novoTexto = texto.replace(/e/g, "enter");
        novoTexto = novoTexto.replace(/i/g, "imes");
        novoTexto = novoTexto.replace(/a/g, "alis");
        novoTexto = novoTexto.replace(/o/g, "ober");
        novoTexto = novoTexto.replace(/u/g, "ufat");

        apareceTexto(novoTexto); 

    }else if(!texto.match(re) && texto !== "") {
        alert("Não use letras maiúsculas ou acentos")
        apareceConteudo();
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

        alert("Não use letras maiúsculas ou acentos")

        apareceConteudo();
    }

});

document.querySelector("#copiar").addEventListener("click", () => {
    
    textoCopiado = document.querySelector("#texto2").value;
    
    while(textoCopiado == "") {
        
        window.alert("Nenhuma mensagem para ser copiada");
        break;
    }
    
    if(textoCopiado != "") {
        
        textoCopiado = document.querySelector("#texto2").select();
        document.execCommand("copy");
        
        alert("A menssagem foi copiada");
        apareceConteudo();
        document.querySelector("#texto").focus();

    }  

});

document.querySelector("#limpar").addEventListener("click", () => {

    apareceConteudo();
    document.querySelector("#texto").value = "";
    document.querySelector("#texto").focus();

}); 