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

let vitoria = 100;
let derrotas = 10;

const listaDeNivel = ['Ferro','Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];
const calculo = vitoria - derrotas;

function saldoVitorias(resultado) {
    resultado = calculo;

        if (resultado < 10) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[0])
        }
        else if (resultado > 11 && resultado <= 20) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[1])
        }
        else if (resultado >= 21 && resultado <= 50) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[2])
        }
        else if (resultado >= 51 && resultado <= 80) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[3])
        }
        else if (resultado >= 81 && resultado <= 90) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[4])
        }
        else if (resultado >= 91 && resultado <= 100) {
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[5])
        }
        else{
            console.log("O Herói tem de daldo de " + resultado + " está no nível de " + listaDeNivel[6])
        }
}

saldoVitorias();