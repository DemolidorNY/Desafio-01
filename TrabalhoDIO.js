let nomeHeroi1 = "Capitão América";
let xpHeroi1 = 1001;

calcularNivel(nomeHeroi1, xpHeroi1);

let nomeHeroi2 = "Viúva Negra";
let xpHeroi2 = 2001;

calcularNivel(nomeHeroi2, xpHeroi2);

let nomeHeroi3 = "Noturno";
let xpHeroi3 = 6001;

calcularNivel(nomeHeroi3, xpHeroi3);

let nomeHeroi4 = "DR.charles";
let xpHeroi4 = 7001;

calcularNivel(nomeHeroi4, xpHeroi4);

let nomeHeroi5 = "CapitãoPatria";
let xpHeroi5 = 8001;

calcularNivel(nomeHeroi5, xpHeroi5);

let nomeHeroi6 = "Tempesta";
let xpHeroi6 = 9001;

calcularNivel(nomeHeroi6, xpHeroi6);

let nomeHeroi7 = "capitaoAmerica";
let xpHeroi7 = 10001;

calcularNivel(nomeHeroi7, xpHeroi7);

function calcularNivel(nomeHeroi, xpHeroi) {
    let nivel;

    if (xpHeroi < 1001) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else if (xpHeroi >= 10001 && xpHeroi <= Infinity) {
        nivel = "Imortal";
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
}
