var textInput = document.querySelector("#text-area-mensagem");
var outInput = document.querySelector("#text-output");

function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
  
  document.getElementById('caixa-text-output').innerHTML = '<h1>Mensagem</h1>' +
  '<textarea  id="text_output" cols="30" rows="10" placeholder="A mensagem processada aparecerá aqui">' + resultCripto + '</textarea>' + '<div class="div">' +   '<button onclick="copiar()" class="convert-button" id="copiar" >' + 'Copiar' + '</button>' + '</div>';
}

function descriptografar(){

    var texto = textInput.value;
    
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('caixa-text-output').innerHTML = '<h1>Mensagem</h1>' +
  '<textarea  id="text_output" cols="30" rows="10" placeholder="A mensagem processada aparecerá aqui">' + resultDescripto + '</textarea>' + '<div class="div">' +   '<button onclick="copiar()" class="convert-button" id="copiar" >' + 'Copiar' + '</button>' + '</div>';
}

function copiar() {
    var textoCop = document.getElementById('text_output');
    // alert(textoCop)
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    textoCop.value= ''

}