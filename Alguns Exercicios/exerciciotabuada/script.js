function gerar() {
var num= document.getElementById('nun')
var n= Number(num.value)
var tab= document.getElementById('seltab')
var c=1
if (num.value==0) {
    window.alert('Digite um valor')
} else {
    tab.innerHTML=''
    while (c<=10) {
        var item=document.createElement('option')
        item.text= `${n} x ${c} = ${c*n}`
        tab.appendChild(item)
        c++
    }
}

}