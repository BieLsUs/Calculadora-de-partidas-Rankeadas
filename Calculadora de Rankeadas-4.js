//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

// ## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let vitoria = 30
let derrotas = 25

saldoVitorias(vitoria - derrotas)

function saldoVitorias(saldo) {
        if (saldo <= 10) {
            let nivel = "Ferro"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo === 20) {
            let nivel = "Bronze"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo === 50) {
            let nivel = "Prata"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo === 80) {
            let nivel = "Ouro"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo === 90) {
            let nivel = "Diamante"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo === 100) {
            let nivel = "Lendário"
            console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }
        if (saldo >= 101) {
            let nivel = "Imortal"
                console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel)
        }

}