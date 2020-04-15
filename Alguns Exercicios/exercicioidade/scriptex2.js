function verifica() {
    var date= new Date()
    var ano= date.getFullYear() 
    var fano= document.getElementById('data')
    var res = document.querySelector('div#res')
    var idade= ano - Number(fano.value)
    var fsex= document.getElementsByName('radsex')
    var genero=''
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('ERRO, insira um valor válido')
    } 
    if (fsex[0].checked) {
        genero= 'Homem'
        if (idade>=0 && idade<14) {
            img.setAttribute('src', 'crianca.jpg')
        }else if (idade<25) {
            img.setAttribute('src', 'ojoven.jpg')
        }else if (idade<50) {
            img.setAttribute('src', 'homem.jpg')
        }else if (idade>=50) {
            img.setAttribute('src', 'idoso.jpg')
        }
    }
    else if (fsex[1].checked) {
        genero= 'Mulher'
        if (idade>=0 && idade<14) {
            img.src='acrianca.jpg'
        }else if (idade<25) {
            img.src='ajoven.jpg'
        }else if (idade<50) {
            img.src='mulher.jpg'
        }else if (idade>=50) {
            img.src='idosa.jpg'
        }
    } 
    res.style.textAlign='center'
    res.innerHTML= `Detectamos ${genero} com ${idade} anos<br>`
    res.appendChild(img)
    }
