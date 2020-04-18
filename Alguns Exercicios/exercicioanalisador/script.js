var nun = document.getElementById('nun')
var sel = document.getElementById('val')
var res = document.getElementById('res')
var valores=[]
function inlista(n,l) {
    if (l.indexOf(Number(n)) !=-1) {
        return true
    } else {
        return false
    }
}
function add() {
    if (!inlista(nun.value ,valores) && nun.value!=0 && nun.value<100) {
        valores.push(Number(nun.value))
        var item= document.createElement('option')
        item.innerHTML=`Valor ${nun.value} adicionado`
        sel.appendChild(item)
        res.innerHTML=''
    } else {
        window.alert('Insira um valor válido')
    }
    nun.value=''
    nun.focus()
}
function fin() {
    if (valores==0) {
        window.alert('Insira um valor válido')
    } else{
        let total= valores.length
        let menor= valores[0]
        let maior= valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma+= valores[pos]
    
            if(valores[pos] > maior)
            maior= valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media= soma/valores.length
        res.innerHTML=''
        res.innerHTML+= `Ao todo, temos ${total} números cadastrados<br>`
        res.innerHTML+= `O número ${maior} é o maior valor<br>`
        res.innerHTML+= `O número ${menor} é o menor valor<br>`
        res.innerHTML+= `A soma dos valores é ${soma}<br>`
        res.innerHTML+= `A media dos valores é ${media}`
    }
}