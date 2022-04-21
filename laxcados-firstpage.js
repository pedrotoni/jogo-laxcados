function startJogo() {
    var querJogar = prompt("Você deseja jogar? \n[1] SIM \n[2] NÃO")
    while (querJogar != 1 && querJogar != 2  && querJogar != null) {
        alert("Esta opção não foi encontrada! Tente novamente!")
        var querJogar = prompt("Você deseja jogar? \n[1] SIM \n[2] NÃO");
    }
    if (querJogar == 1) {
        window.location = "./laxcados-personagens.html"
    } else if (querJogar == 2) {
        alert("Você perdeu a oportunidade de salvar um Laxcado! :(")
    }
    else if (querJogar === null) {
        alert("Você perdeu a oportunidade de salvar um Laxcado! :(")
    }
}
