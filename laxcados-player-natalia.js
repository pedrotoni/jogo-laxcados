function nataliaDesafio1() {

    var decisaoNatalia1 = prompt("Natália acordou atrasada para as atividades do dia. Quando foi acordar o filho, ele a avisou que teria uma reunião de pais e mestres na escola. \n\nPor não estar ciente da reunião, Natália não se programou e nem avisou seu chefe. Ainda por cima percebe que o horário da reunião conflita com o horário de seu trabalho. \n\nNatália vai para a reunião na escola? \n\n[1] SIM \n[2] NÃO");

    while(decisaoNatalia1 != 1 && decisaoNatalia1 != 2) {
        alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] OU [2]!")
        var decisaoNatalia1 = prompt("Natália acordou muito cansada e quando olhou a hora viu que estava muito atrasada para as atividades do dia. \n\nQuando foi acordar o filho, ele a avisou que teria uma reunião de pais e mestres na escola. \n\nPor não estar ciente da reunião, Natália não se programou e nem avisou seu chefe. Ainda por cima percebe que o horário da reunião conflita com o horário de seu trabalho. \n\nNatália vai para a reunião na escola? \n\n[1] SIM\n\n[2] NÃO");

    } if (decisaoNatalia1 == 1) {
        var decisaoNatalia2 = prompt("Natália decide ir para a reunião da escola e chega atrasada no trabalho. \n\nAo chegar, explica a situação para seu chefe. Apesar de demonstrar compreensão e empatia, ele pede que ela entregue todas as provas corrigidas até o final do dia. \n\nNatália corrige as provas? \n[1] SIM \n[2] NÃO");

        while (decisaoNatalia2 != 1 && decisaoNatalia2 != 2) {
            alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] OU [2]");
            var decisaoNatalia2 = prompt("Natália decide ir para a reunião da escola e chega atrasada no trabalho. \n\nAo chegar, explica a situação para seu chefe. Apesar de demonstrar compreensão e empatia, ele pede que ela entregue todas as provas corrigidas até o final do dia. \n\nNatália corrige as provas? \n[1] SIM \n[2] NÃO");
        }
            if (decisaoNatalia2 == 1) {

                    var decisaoNatalia3 = prompt("Natália faz hora extra no trabalho e consegue entregar todas as provas corrigidas como seu chefe pediu. \n\nPor ter saído mais tarde do trabalho, agora ela precisa decidir: \n\n[1] Buscar o filho na escola \n[2] Ir para o curso");
                    while (decisaoNatalia3 != 1 && decisaoNatalia3 != 2) {
                        alert("OPÇÃO INVÁLIDA! ESCOLHA APENAS [1] OU [2]");
                        var decisaoNatalia3 = prompt("Natália faz hora extra no trabalho e consegue entregar todas as provas corrigidas como seu chefe pediu. \n\nPor ter saído mais tarde do trabalho, agora ela precisa decidir: \n\n[1] Buscar o filho na escola \n[2] Ir para o curso");

                    } if (decisaoNatalia3 == 1) {
                        alert("Natália encontra o filho sozinho e chorando na diretoria. \n\nPara consolar o menino, decide passear com ele no shopping. \n\nApós voltar para casa, lembra que naquele mesmo dia teria uma apresentação em seu curso! Natália perde nota e agora tem que correr atrás do prejuízo no próximo módulo. \n\nNatália se Laxcou! :(");
                        window.location = "./laxcados-gameover-triste.html";
                    } else if (decisaoNatalia3 == 2) {
                        alert("Natália pede para a amiga buscar o filho na escola e corre para o curso. \n\nChegando lá, faz uma ótima apresentação e logo após é convidada para participar de um processo seletivo de uma ótima empresa! \n\nChegando em casa, pede uma pizza para comemorar com o filho. \n\nParabéns! Você salvou uma Laxcada! :)")
                        window.location = "./laxcados-gameover-feliz.html";
                } 
        }   else if (decisaoNatalia2 == 2) {
                alert("Natália conversa com seu chefe diz que não pode ficar até mais tarde, por conta de seu filho e do curso. \n\nEla argumenta bem e consegue negociar com o chefe, mas com uma condição: Terá que trabalhar no sábado, que coincidentemente é o aniversário de seu filho. \n\nNatália se Laxcou! :(");
                window.location = "./laxcados-gameover-triste.html";
        }   

        } else if (decisaoNatalia1 == 2) {
            alert("Natália chega no trabalho no horário certo e realiza todas as atividades do dia. \n\nNo entanto, a reunião que ela perdeu era sobre o desempenho do filho na escola. \n\nAo não estar presente para discutir sobre o assunto com os professores, seu filho acabou repetindo de ano! \n\nNatália e seu filho se Laxcaram! :(");
            window.location = "./laxcados-gameover-triste.html";
        }
    }