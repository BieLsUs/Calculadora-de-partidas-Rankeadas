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

let vitoria = 40
let derrotas = 20

saldoVitorias(vitoria - derrotas)

function saldoVitorias(saldo) {
    let nivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","imortal"]

    console.log("O Herói tem de saldo de " + saldo + " estava no nível de " + nivel[0])
    console.log(" e evoluiu para o nível " + nivel[1])
}