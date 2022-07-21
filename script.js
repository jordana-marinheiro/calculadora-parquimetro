function confirmarDeposito() {
    let inValor = document.getElementById('inValor')
    let outTempo = document.getElementById('outTempo')
    let outTroco = document.getElementById('outTroco')

    let valor = Number(inValor.value)

    if (valor < 1) {
        alert('Valor Insuficiente.')
        inValor.focus()
        return
    }

    let troco, tempo

    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75){
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1.00;
    }

    outTempo.innerHTML = `Tempo: ${tempo} min`
    outTroco.innerHTML = `Troco R$: ${troco.toFixed(2)}`

}

let btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', confirmarDeposito)