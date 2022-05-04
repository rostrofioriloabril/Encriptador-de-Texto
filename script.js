var _borrar = document.getElementById("extra"); ///IMAGEN
var _borrar1 = document.getElementById("extra1");//H2
var _borrar2 = document.getElementById("extra2");//H3
var botoncopiar = document.getElementById("copiar"); //
var texto = document.getElementById("textarea") //BLOQUE ENTRADA DE TEXTO
var textoDelTextarea = document.getElementById('textoDelInicio')//DIV DE LA SECCION 2
texto.focus();
//////////////////////////////////////////////////////////////////////////////////////////
function remover() { /////////QUITAR LOS EXTRA Y AGREGAR EL DIV DE TEXTO EDITABLE
    _borrar.style.display="none";
    _borrar1.style.display="none";
    _borrar2.style.display="none";
    textoDelTextarea.style.display="block";
    botoncopiar.style.display="block"
}

function emparejar() {
    remover()
    textoDelTextarea.innerHTML = texto.value  //EL TEXTO DE LA => ES IGUAL QUE EL DE LA <=
}

function emparejarEncriptado(patron,char_replace,texto_replace){
    let nombre = texto_replace
    nombre = nombre.replaceAll(patron, char_replace);
    // remover()
    // textoDelTextarea.innerHTML = texto.value + "<br>"
    // texto.value = nombre
    return nombre
}

function quitarAcentos (){

            texto.value.normalize('NFD').replace(/[u0300-\u036f]/g,"");
            alert("Ingresó un acento");
            texto.value = ''
            texto.placeholder = 'Ingrese un texto sin acentos';
            texto.focus()
            return
            
}
function removerAcentos(){
    if(texto.value.includes("á") || texto.value.includes("à")){
        quitarAcentos()
        
    }
    if(texto.value.includes("è") || texto.value.includes("é")){
        quitarAcentos()
       

    }
    if(texto.value.includes("ì")|| texto.value.includes("í")){
    quitarAcentos()
  

    }
    if(texto.value.includes("ó")|| texto.value.includes("ò")){
    quitarAcentos()
    

    }
    if(texto.value.includes("ù")|| texto.value.includes("ú")){
    quitarAcentos()   
       
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cambiar(){
    let texto_replace =texto.value
    if(texto.value.includes("e")){
        texto_replace = emparejarEncriptado('e',"enter",texto_replace);
    }
    if (texto.value.includes("i")){
        texto_replace =  emparejarEncriptado('i',"imes",texto_replace);
    }
    if (texto.value.includes("a")){
        texto_replace =  emparejarEncriptado('a',"ai",texto_replace)
    }
    if (texto.value.includes("o")){
        texto_replace =  emparejarEncriptado('o',"ober",texto_replace)
    }
    if (texto.value.includes("u")){
        texto_replace =  emparejarEncriptado('u',"ufat",texto_replace)
    }        
    remover()
    textoDelTextarea.innerHTML = texto_replace
   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function encriptar () {
        if(texto.value !== ""){
            texto.value = texto.value;
                removerAcentos()
            if(texto.value.includes("a","e","i","o","u")){
                cambiar();

            }
                
                  
    }else{
        alert("Debe ingresar por lo menos una palabra")
        texto.value = texto.value
        texto.focus()
      }  

       texto.focus()
      

}
let boton = document.getElementsByClassName('btn1');
boton.onclick = encriptar;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function devolverEnTexto(){
    let texto_replace =texto.value
    if(texto.value.includes("enter")){
        texto_replace = emparejarEncriptado('enter',"e",texto_replace);
    }
    if (texto.value.includes("imes")){
        texto_replace =  emparejarEncriptado('imes',"i",texto_replace);
    }
    if (texto.value.includes("ai")){
        texto_replace =  emparejarEncriptado('ai',"a",texto_replace)
    }
    if (texto.value.includes("ober")){
        texto_replace =  emparejarEncriptado('ober',"o",texto_replace)
    }
    if (texto.value.includes("ufat")){
        texto_replace =  emparejarEncriptado('ufat',"u",texto_replace)
    }        
    remover()
    textoDelTextarea.innerHTML = texto_replace 
}
function devolver(){
    let textarea = textoDelTextarea.innerHTML
    let texto_replace = textarea
    if(textarea.includes("enter")){
        texto_replace = emparejarEncriptado('enter',"e",texto_replace);
    }
    if (textarea.includes("imes")){
        texto_replace =  emparejarEncriptado('imes',"i",texto_replace);
    }
    if (textarea.includes("ai")){
        texto_replace =  emparejarEncriptado('ai',"a",texto_replace)
    }
    if (textarea.includes("ober")){
        texto_replace =  emparejarEncriptado('ober',"o",texto_replace)
    }
    if (textarea.includes("ufat")){
        texto_replace =  emparejarEncriptado('ufat',"u",texto_replace)
    }        
    remover()
    textoDelTextarea.innerHTML = texto_replace
    texto.value = texto.value
}

function desencriptar(){
        let textarea = textoDelTextarea.innerHTML
        if(texto.value !== ""){
        texto.value = texto.value;
        removerAcentos();
        if(texto.value.includes("ai","enter","imes","ober","ufat")){
            devolverEnTexto()
        }
        
        if(textarea.includes("ai","enter","imes","ober","ufat")){
            devolver();

        }
        }else{
            alert("Debe ingresar por lo menos una palabra")
            texto.value = texto.value
            texto.focus()
          }  
    
           texto.focus()
          
    
}
let boton2 = document.getElementsByClassName('btn2');
boton2 = desencriptar;
function copyToClip(str) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    textoDelTextarea.innerHTML = "¡Has copiado el texto correctamente!" + "<br>" + "<br>" +"¡Intenta pegarlo!";
    texto.focus();
  };
