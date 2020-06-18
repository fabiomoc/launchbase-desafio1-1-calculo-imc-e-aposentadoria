const name = 'João'
const peso = 85
const altura = 1.85

const imc = peso / (altura * altura)

console.log(`IMC: ${imc}`)

if (imc >= 30) {
  console.log(`${name}, você está acima do peso.`)
} else {
  console.log(`${name}, você não está acima do peso.`)
}