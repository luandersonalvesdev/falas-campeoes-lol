let championsAndPhrases = [
    [
        nome = 'Aatrox',
        img = "https://www.mobafire.com/images/champion/square/aatrox.png",
        'A dor é temporária, a vitória é eterna.',
        'A paz é a maior mentira da história.',
        'Retalhe a coragem deles.',
        'A cada abate a vitória se aproxima.',
        'Verdadeiro guerreiros nascem em sangue!',
        'Lute e seja lembrado, ou morra e seja esquecido.',
    ],
    [
        nome = 'Ahri',
        img = "https://www.mobafire.com/images/champion/square/ahri.png",
        'Se você quiser jogar comigo, é melhor conhecer bem o jogo.',
        'A piedade é um luxo e uma responsabilidade dos seres humanos.',
        'Ninguém vai ficar no meu caminho.',
        'Acabou a brincadeira.',
        'Venha tentar a sua sorte, se você acha que está na minha liga.',
        'Devo fazer sua pulsação subir? Ou... sumir?!'
    ],
    [
        nome = 'Akali',
        img = "https://www.mobafire.com/images/champion/square/akali.png",
        'Juventude e habilidade acima de tudo.',
        'Aprendi a matar quando aprendi a andar.',
        'Agora você aprendeu, chega de meditações e de mestres.',
        'Matar é só um detalhe, oque importa é quem vai morrer.',
        'Guerras são sujas demais, gosto de abates limpos e precisos.',
        'Tantos inimigos, tantas facas para fincar...',
    ],
    [
        nome = 'Aurelion-Sol',
        img = "https://www.mobafire.com/images/champion/square/aurelion-sol.png",
        'Sua existencia não é impossivel, mas muito... Muuuito improvável.',
        'Porque eu sou um dragão estelar, só por isso.',
        'Eu vou jogar uma estrela em você, boa sorte.',
        'Simplismente não existe outros dragões como eu.',
    ],
    [
        nome = 'Braum',
        img = "https://www.mobafire.com/images/champion/square/braum.png",
        'Um coração gelado só precisa de um coração caloroso.',
        'Quanto mais negra a noite, mais brilhantes são as estrelas.',
        'Bons tempos, bons amigos... o que poderia ser melhor?',
        'As cabras são sábias; coma tudo, escale tudo, e se algo te chutar, dê um chute de volta!',
        'Se você tiver problemas, você vem a mim primeiro.',
        'Eles podem ter muitos, mas você me tem.',
    ],
    [
        nome = 'Ekko',
        img = "https://www.mobafire.com/images/champion/square/ekko.png",
        'Não importa quanto tempo você tem, mas como você o usa.',
        'As pessoas perdem muito tempo e querem mais. Eles querem mais horas em seus dias, mais dias em seus anos, mais anos em suas vidas.',
        'Cada segundo importa.',
        'Prefiro morrer que não fazer nada!',
        'Se você não pode aproveitar ao máximo todos os momentos, você não merece nenhum segundo a mais.',
    ],
    [
        nome = "Kai'sa",
        img = "https://www.mobafire.com/images/champion/square/kaisa.png",
        'Sobreviver significa nunca desistir e o vazio também sabe disso',
        'Eu não vou recuar!',
        'Que lugar lindo... Eu tenho que salva-lo!',
    ],
    [
        nome = 'Neeko',
        img = "https://www.mobafire.com/images/champion/square/neeko.png",
        'Se Neeko virar Neeko... O que Neeko vai ser ?',
        'Eu vou crescer, eu vou... Neeko.',
        'Moça dragão gostaria de sair para almoçar com Neeko algum dia?',
        'Você conhece a Nami? Ela é... legal?',
    ],
    [
        nome = 'Soraka',
        img = "https://www.mobafire.com/images/champion/square/soraka.png",
        'Enquanto eu viver, ninguém há de sofrer.',
        'Sim, aquilo era uma banana. Ninguém espera por uma banana.',
        'Estrelas ouçam a mim!',
        'Eu não vou salvar você.',
        'Cada passo é uma nova jornada.',
        'Para curar e proteger',
    ],
    [
        nome = 'Syndra',
        img = "https://www.mobafire.com/images/champion/square/syndra.png",
        'Uma legião foi incapaz de me parar, quais seriam as suas chances?',
        'Adoro ve-los voar...',
        'Tanto podeer irrestrito!',
    ],
    [
        nome = 'Zyra',
        img = "https://www.mobafire.com/images/champion/square/zyra.png",
        'Está terra é minha!',
        'Apenas uma flor é inofensiva',
        'Onde estão seus amigos? Os meus, estão por todos os lados',
    ],
    [
        nome = 'Zoe',
        img = "https://www.mobafire.com/images/champion/square/zoe.png",
        'Adoro seus sapatos e suas roupas!',
        'Você quer ser minha amiga??? ',
        'Hora da sonequinha!',
        'Ah... Fiquei tonta',
    ],
    [
        nome = 'Amumu',
        img = "https://www.mobafire.com/images/champion/square/amumu.png",
        'Posso te dar um abraço?'
    ],
    [
        nome = 'Rammus',
        img = "https://www.mobafire.com/images/champion/square/rammus.png",
        'Ok!'
    ],

]

function drawFrase(){
    // IDENTIFICANDO OS ELEMENTOS A SEREM MUDADOS NA PAGINA
    let getImagePage = document.getElementById("championImage")
    let getPhrasePage = document.getElementById("championPhrase")
    let getChampionNamePage = document.getElementById("championName")

    // RANDOMIZANDO 1 NUMEROS
    let numForChampions = Math.floor(Math.random() * championsAndPhrases.length)

    // PEGANDO UM CAMPEAO
    let getChampionArray = championsAndPhrases[numForChampions]

    // RANDOMIZANDO OUTRO NUMERO
    let numForPhrase = Math.floor((Math.random() * (getChampionArray.length-2)) + 2);

    // PEGANDO A FRASE E NOME
    let getChampionPhrase = getChampionArray[numForPhrase];
    let getNameChampion = getChampionArray[0];

    // TROCANDO IMAGEM, FRASE E NOME
    getImagePage.src = getChampionArray[1];
    getPhrasePage.innerHTML = ` "${getChampionPhrase}"`;
    getChampionNamePage.innerHTML = getNameChampion;
}
