function conta() {
    var inicio= document.getElementById('txti')
    var fim= document.getElementById('txtf')
    var passo= document.getElementById('txtp')
    var res= document.getElementById('res')
    var i= Number(inicio.value)
    var f= Number(fim.value)
    var p= Number(passo.value)
    if (p<=0) {
        p=1 
    }
    if (fim.value==0 ||inicio.value==0) {
window.alert('[Erro] digite outro valor')
    }
    for(var c= i; c<=f;c+=p){
        res.innerHTML+= `${c} `
    }
    

}