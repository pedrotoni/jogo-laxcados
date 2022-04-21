function adalbertoDesafio1() {

    var decisaoAdalberto1 = prompt("Adalberto estava a caminho do trabalho e sua esposa entrou em trabalho de parto. \n\nAgora ele precisa decidir se leva a esposa para o hospital ou se corre para o trabalho para não chegar atrasado, já que não pode correr o risco de ser demitido. \n\nVocê decide: \n[1] Levar a esposa para o hospital \n[2] Chamar a ambulância e ir para o trabalho");

    while (decisaoAdalberto1 != 1 && decisaoAdalberto1 != 2) {
        alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] ou [2]")
        var decisaoAdalberto1 = prompt("Adalberto estava a caminho do trabalho e sua esposa entrou em trabalho de parto. \n\nAgora ele precisa decidir se leva a esposa para o hospital ou se corre para o trabalho para não chegar atrasado, já que não pode correr o risco de ser demitido. \n\nVocê decide: \n[1] Levar a esposa para o hospital \n[2] Chamar a ambulância e ir para o trabalho");

    }
    if (decisaoAdalberto1 == 1) {
        alert("Adalberto levou a mulher para o hospital, passou o dia inteiro lá e perdeu a reunião. \n\nNo dia seguinte quando chegou ao trabalho, chamou o chefe para conversar e soube que não havia mais chances de ser promovido, pois a vaga foi preenchida na reunião de ontem. \n\nAdalberto se LAXCOU! :(")
        window.location = "./laxcados-gameover-triste.html";
    } else if (decisaoAdalberto1 == 2) {
        var decisaoAdalberto2 = prompt("Adalberto chamou a ambulância e se atrasou para o trabalho. \nAo chegar no trabalho ele tem duas opções: \n\n[1] Chamar o chefe e explicar o motivo do atraso \n[2] Entrar na reunião sem explicações sobre o atraso");

        while (decisaoAdalberto2 != 1 && decisaoAdalberto2 != 2) {
            alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] OU [2]");
            var decisaoAdalberto2 = prompt("Adalberto chamou a ambulância e se atrasou para o trabalho. \n\nAo chegar na firma, tem duas opções: \n\n[1] Chamar o chefe e explicar o motivo do atraso \n[2] Entrar na reunião sem explicações sobre o atraso");
        } if (decisaoAdalberto2 == 1) {
            alert("Adalberto chamou o chefe em um momento em que ele não estava falando na reunião e explicou o ocorrido, justificando o atraso. \n\nAo terminar a reunião, seu chefe o chama no escritório e lhe concede a promoção, por enxergar que Adalberto preza pelo relacionamento com sua equipe e valoriza a conduta tomada pelo mesmo. \n\nAdalberto volta ao hospital e conta para a companheira que foi promovido. \n\nParabéns! Você salvou um Laxcado! :)");
            window.location = "./laxcados-gameover-feliz.html";
        } else if (decisaoAdalberto2 == 2) {
            var decisaoAdalberto3 = prompt("Após entrar na sala de reunião atrasado, Adalberto passa por uma situação terrível. \n\nSeu chefe o constrange publicamente na frente de todos. Qual atitude tomar neste caso? \n\n[1] Adalberto recebe a humilhação calado e se retira da sala de reuniões sem falar nada. \n[2] Adalberto se desculpa pelo atraso e informa eufórico para todos da sala que sua companheira entrou em trabalho de parto.");

            while (decisaoAdalberto3 != 1 && decisaoAdalberto3 != 2) {
                alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] OU [2}");
                var decisaoAdalberto3 = prompt("Após entrar na sala de reunião atrasado, Adalberto passa por uma situação terrível. \n\nSeu chefe o constrange publicamente na frente de todos. \n\nQual atitude tomar neste caso? \n\n[1] Adalberto recebe a humilhação calado e se retira da sala de reuniões sem falar nada. \n[2] Adalberto se desculpa pelo atraso e informa eufórico para todos da sala que sua companheira entrou em trabalho de parto.");
            } if (decisaoAdalberto3 == 1) {
                alert("Após a reunião, Adalberto é chamado na sala do chefe e recebe a notícia de que está sendo demitido. \n\nAo não se comunicar corretamente com a liderança, impossibilitou que os diretores tivessem ciência de sua situação. Perdeu o emprego e se Laxcou! :(");
                window.location = "./laxcados-gameover-triste.html";
            } else if (decisaoAdalberto3 == 2) {
                alert("Adalberto é chamado na sala do chefe e recebe o ultimato: Para não ser demitido, deve desligar 5 funcionários de sua equipe imediatamente. \n\nCom muito peso na consciência, Adalberto cumpre as ordens do patrão, perde a tão desejada promoção e agora tem que entregar o mesmo resultado com 5 pessoas a menos! \n\nEle e sua equipe se Laxcaram! :(")
                window.location = "./laxcados-gameover-triste.html";
            }
        }
    }
}