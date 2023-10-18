const min = 1000
const max = 11000
let xp = Math.floor(Math.random() * (max - min) + min)
// let xp = 10489
const level = [
  'Ferro',
  'Bronze',
  'Prata',
  'Ouro',
  'Platina',
  'Ascendente',
  'Imortal',
  'Radiante'
]
let heroName = 'Anubis'
let levelBool = !!xp || true

console.log(`Seu xp é de ${xp}`)

switch (levelBool) {
  case xp <= 1000:
    final(level[0])
    break
  case xp >= 1001 && xp <= 2000:
    final(level[1])
    break
  case xp >= 2001 && xp <= 5000:
    final(level[2])
    break
  case xp >= 5001 && xp <= 7000:
    final(level[3])
    break
  case xp >= 7001 && xp <= 8000:
    final(level[4])
    break
  case xp >= 8001 && xp <= 9000:
    final(level[5])
    break
  case xp >= 9001 && xp <= 10000:
    final(level[6])
    break
  default:
    final(level[7])
    break
}

function final(level) {
  console.log(`O Herói de nome ${heroName} está no nível de ${level}`)
}
