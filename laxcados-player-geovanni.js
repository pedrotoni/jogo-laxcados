function geovanniDesafio1() {
    var decisaoGeovanni1 = prompt("Geovanni tem um date para ir e está em dúvida se vai de carro ou de metrô. Como Geovanni deve ir?\n\n[1] Carro \n[2] Metrô");
    while (decisaoGeovanni1 != 1 && decisaoGeovanni1 != 2) {
        alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] ou [2]")
        var decisaoGeovanni1 = prompt("Geovanni tem um date para ir e está em dúvida se vai de carro ou de metrô. Como Geovanni deve ir?\n\n[1] Carro \n[2] Metrô");
    } if (decisaoGeovanni1 == 1) {
        var decisaoGeovanni2 = prompt("Geovanni decide ir de carro por questões de comodidade. \n\nNa metade do caminho seu possante quebra, e ele precisa decidir se chama o reboque ou se continua no caminho pro date! \n\n[1] Chama o reboque \n[2] Segue pro date ");
        while (decisaoGeovanni2 != 1 && decisaoGeovanni2 != 2) {
            alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] ou [2]");
            var decisaoGeovanni2 = prompt("Geovanni decide ir de carro por questões de comodidade. \n\nNa metade do caminho seu possante quebra, e ele precisa decidir se chama o reboque ou se continua no caminho pro date! \n\n[1] Chama o reboque \n[2] Segue pro date ");
        } if (decisaoGeovanni2 == 1) {
            var decisaoGeovanni3 = prompt("O reboque vem e retira o carro de Geovanni por R$300, restando apenas R$200. Ele chega em casa frustrado e não sabe o que fazer. \n\nPensa em duas opções: Chamar seu crush para ir até sua casa ou curtir o resto da noite sozinho, desfrutando de sua própria companhia! Escolha: \n\n[1] Tentar o date em casa \n[2] Fica sozinho");
            while (decisaoGeovanni3 != 1 && decisaoGeovanni3 != 2) {
                alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] ou [2]");
                var decisaoGeovanni3 = prompt("O reboque vem e retira o carro de Geovanni por R$300, restando apenas R$200. Ele chega em casa frustrado e não sabe o que fazer. \n\nPensa em duas opções: Chamar seu crush para ir até sua casa ou curtir o resto da noite sozinho, desfrutando de sua própria companhia! Escolha: \n\n[1] Tentar o date em casa \n[2] Fica sozinho");
            } if (decisaoGeovanni3 == 1) {
                alert("Ele liga para seu date, explica tudo o que aconteceu, e convida a pessoa para assistir uma série em sua casa. \n\nSeu crush aceita a proposta, Geovanni consegue o date e ainda economiza uma graninha. Parabéns! Você salvou um Laxcado! :)");
                window.location = "./laxcados-gameover-feliz.html";
            } else if (decisaoGeovanni3 == 2) {
                alert("Geovanni pede cerveja por aplicativo e assiste videos de lock picking até dormir. \n\nNo dia seguinte acorda com uma ressaca monstruosa e vê que gastou R$200 em cerveja, e agora está com o saldo zerado. Geovanni se Laxcou! :(");
                window.location = "./laxcados-gameover-triste.html"
            }

        } else if (decisaoGeovanni2 == 2) {
            alert("Geovanni deixa o carro numa calçada e vai pro date de ônibus. \n\nO Carro é rebocado pela prefeitura e Geovanni precisa pagar uma multa de R$500, além dos R$200 que acabou gastando no date. \n\nGeovanni se Laxcou! :(")
            window.location = "./laxcados-gameover-triste.html"
        }

    } else if (decisaoGeovanni1 == 2) {
        alert("Geovanni decide ir de metrô pois assim não depende do trânsito, reduz as chances de atraso e economiza uma grana para beber um pouco mais. \n\nEle consegue chegar na hora do encontro, e se diverte muito comendo e bebendo bem com seu crush. \n\nParabéns, você salvou um Laxcado! :)")
        window.location = "./laxcados-gameover-feliz.html";
    }

}