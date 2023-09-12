const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nome) {
    rl.question("Digite a quantidade de experiência (XP) do herói: ", function(xp) {
        // Converter xp para número
        xp = parseInt(xp);

        // Utiliza uma estrutura de decisão para determinar o nível com base na quantidade de XP
        let nivel;

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 6001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibe a mensagem com o nome do herói e o nível
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        rl.close(); // Fecha a interface readline
    });
});
