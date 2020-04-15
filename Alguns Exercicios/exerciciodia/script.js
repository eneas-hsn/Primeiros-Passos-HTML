function carregar() {
 var data= new Date()   
var hora= data.getHours()
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('img')
var res= document.getElementById('res')
msg.innerHTML=  `Agora são ${hora} horas.`
if (hora>0 && hora <=12) {
    img.src= 'manha.jpg'
    document.body.style.backgroundColor='rgb(218, 255, 83)' 
    res.innerHTML='Bom dia!'
}
else if (hora >12 && hora<18) {
    img.src= 'tarde.jpg'
    document.body.style.backgroundColor='rgb(216, 147, 43)'
    res.innerHTML='Boa tarde!'
}
else if (hora>18 && hora<=23) {
    img.src= 'noite.jpg'
    document.body.style.backgroundColor='rgb(54, 44, 29)'
    res.innerHTML='Boa noite!'
}

}