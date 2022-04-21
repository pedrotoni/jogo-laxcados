function escolheLaxcado() {
    var opcaoLaxcado = prompt("Escolha o seu Laxcado! Digite o número correspondente ao seu personagem. \n[1] Adalberto \n[2] Natália \n[3] Geovanni");
    while (opcaoLaxcado != 1 && opcaoLaxcado != 2 && opcaoLaxcado != 3) {
        alert("Este Laxcado não foi encontrado! Tente novamente!")
        var opcaoLaxcado = prompt("Escolha o seu Laxcado! Digite o número correspondente ao seu personagem. \n[1] Adalberto \n[2] Natália \n[3] Geovanni");
    }
    if (opcaoLaxcado == 1){
        window.location = "./laxcados-player-adalberto.html";
    } else if (opcaoLaxcado == 2) {
        window.location = "./laxcados-player-natalia.html";
    } else if (opcaoLaxcado == 3) {
        window.location = "./laxcados-player-geovanni.html";
    }
}