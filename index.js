console.log('### CALCULO DE IMC ###')

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

console.log('\n### CALCULO DE APOSENTADORIA ###')

const nome = 'Alexia'
const sexo = 'F'
const idade = 49
const contribuicao = 36

const tempoContribuicao = idade + contribuicao

if ((sexo == 'F' && contribuicao >= 30) || (sexo == 'M' && contribuicao >= 35)) {
  if((sexo == 'F' && tempoContribuicao >= 85) || (sexo == 'M' && tempoContribuicao >= 95)) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você pode se aposentar!`)
  }
} else {
  console.log(`${nome}, você ainda não pode se aposentar!`)
}