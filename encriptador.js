function encriptar() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = inputText.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById('outputText').value = outputText;
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = inputText.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById('outputText').value = outputText;
}
function copiarPortapapeles() {
    let outputTextArea = document.getElementById('outputText');
    outputTextArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}