/**
 * Atividade Botão do Panico
 * @author Patrick G 
 */
function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value)
    const resultadoDiv = document.getElementById('resultado')
    
    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = "" // Limpa o conteúdo do resultado
    document.getElementById('numero').value = "" // Limpa o campo de entrada de número
}
