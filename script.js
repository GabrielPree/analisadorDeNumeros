let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { 
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // serve para adicionar o numero no vetor
        let item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // serve para cada vez que adicionar um numero apagar o resultado
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = '' //serve para apagar oq ja foi digitado
    num.focus() // para que continue no input escrevendo apos adicionar o numero
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos valores temos ${soma}</p>`
        res.innerHTML += `<p>A media de todos os numeros é ${media}</p>`
    }
}


