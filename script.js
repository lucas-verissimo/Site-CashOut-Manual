function enviar() {
    var obj_odd = document.getElementById('odd')
    var obj_valor = document.getElementById('valor')
    var obj_odd_nova = document.getElementById('odd-nova')
    var res = document.getElementById('res')
   
    if (obj_odd.value.length == 0 || obj_valor.value.length == 0 || obj_odd_nova.value.length == 0) {
        alert('Preencha todos os campos antes de continuar')
    } else {
        var odd = Number(obj_odd.value.replace(',', '.'))
        var valor = Number(obj_valor.value.replace(',', '.'))
        var odd_nova = Number(obj_odd_nova.value.replace(',', '.'))

        var valor_novo = odd * valor / odd_nova
        var total = valor_novo + valor
        var odd_cashout = (odd * valor / total).toFixed(2)

        valor_novo = valor_novo.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
        total = total.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        var resultado = document.createElement('p')
        resultado.innerHTML = `Você deve apostar <strong>${valor_novo}</strong> no oposto a sua aposta<br>Essa operação equivale a um cashout de odd <strong>${odd_cashout}</strong>`
        res.appendChild(resultado)
    }
    obj_odd.value = ''
    obj_valor.value = ''
    obj_odd_nova.value = ''
}