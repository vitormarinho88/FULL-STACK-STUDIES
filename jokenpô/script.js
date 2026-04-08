const resultado = document.querySelector(".result")
const humanScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        resultado.innerHTML = '引き分けでした !'

    } else if (
        (human === 'Pedra' && machine === 'Tesoura') ||
        (human === 'Papel' && machine === 'Pedra') ||
        (human === 'Tesoura' && machine === 'Papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultado.innerHTML = 'あなたは勝ちました'

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultado.innerHTML = 'コンピュータが勝ちました'
    }

}