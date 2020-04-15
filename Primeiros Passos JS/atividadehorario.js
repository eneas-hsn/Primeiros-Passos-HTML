var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora}h`)
if (hora>=13 && hora <18) {
    console.log('Boa Tarde')
} if (hora<13 && hora>=5) {
    console.log('Bom dia')
} if (hora>=18 && hora<24) {
    console.log('Boa noite')
} if (hora>=0 && hora<5) {
    console.log('Boa madrugada')
}