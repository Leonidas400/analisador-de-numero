let nu = document.getElementById('txtn');
let ta = document.getElementById('txtb');
let res = document.getElementById('res');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adiciona(){
   if(isNumero(nu.value)&& !inLista(nu.value, valores)){
    valores.push(Number(nu.value))
    let item = document.createElement('option')
    item.text =`Valor ${nu.value} adicionado.`
    ta.appendChild(item)
    res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    nu.value =''
    nu.focus()

}

function finalizar(){
    
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior =valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        

        media = soma / tot
        res.innerHTML=''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros adicionados</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é: ${media}</p>`

        let crescente = valores.sort((a,b) => a - b);
    
        res.innerHTML += `<p>Os valores em ordem crescente é: ${crescente}</p>`
        
        let decrescente = valores.sort((a,b) => b - a);

        res.innerHTML += `<p>Os valores em ordem decrescente é: ${decrescente}</p>`
    }
}
