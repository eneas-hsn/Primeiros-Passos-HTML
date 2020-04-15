function carregar() {
 var data= new Date()   
var hora= data.getHours()
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('img')
msg.innerHTML=  `Agora são ${hora} horas.`
if (hora>0 && hora <=12) {
    img.src= 'manha.png.jpg'
    document.body.style.backgroundColor='rgb(218, 255, 83)' 
}
else if (hora >12 && hora<18) {
    img.src= 'tarde.png.jpg'
    document.body.style.backgroundColor='rgb(216, 147, 43)'
}
else if (hora>18 && hora<=23) {
    img.src= 'noite.png.jpg'
    document.body.style.backgroundColor='rgb(54, 44, 29)'
}

}