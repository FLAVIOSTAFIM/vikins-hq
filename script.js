const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "reza a lenda que muito tempo atrás, uma viking chamada s/n era a mais forte e habilidosa dentre sua tribo,treinando todos os dias sonhando em conquistar terras e mares,será que ela vai conquistar seus sonhos? ",
        alternativas: [
            {
                texto: "sim ela e uma boa guerreira, e irá criar seu própio batalhão",
                afirmacao: "sempre treinando nos momentos que pode"
            },
            {
                texto: "não sua tribo não a apoia",
                afirmacao: "desistir"
            }
        ]
    },
    {
        enunciado: "ela criou um batalhão de guerreiros,e construiram um navio partindo em busca de aventuras e conquistas para contar para as proximas gerações, navegando por mares tempestuosos enfrentando monstros e deuses ao além do horizonte, e ao chegar em terras desconhecidas, os guerreiros enfrentaram inúmeros desafios e batalhas, lutaram contra inimigos, estabeleceram alianças...   ",
        alternativas: [
            {
                texto: "com reis e lords de cada lugar aonde passavam",
                afirmacao: "ficando com sempre com seus guerreiros"
            },
            {
                texto: "não estabeleçer uma aliança",
                afirmacao: "podendo ajudar no futuro"
            }
        ]
    },
    {
        enunciado: "A s/n acabou se tornando uma lider forte e companheira ajudando e cuidando de seus guerreiros de forma justa e persistente, e durante sua vida precisou fazer escolhas dificeis que testaram sua lealdade ",
        
    {
        
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();