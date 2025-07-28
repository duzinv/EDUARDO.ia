const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você instala um novo aplicativo no seu celular. Ele pede acesso à sua localização, câmera, microfone e contatos. O que você faz?",
        alternativas: [
            {
                texto: "Aceita tudo sem pensar, afinal, todos os apps pedem isso.",
                afirmacao: "Aceitou todos os acessos sem questionar, o que pode comprometer sua privacidade. Essa prática dá ao app mais informações do que ele realmente precisa, aumentando os riscos de vazamento ou uso indevido de dados."
            },
            {
                texto: "Lê com atenção e permite apenas o necessário para o funcionamento do app.",
                afirmacao: "Você protegeu sua privacidade ao permitir somente os acessos indispensáveis. Essa é a escolha certa porque garante que o app funcione, mas evita que colete dados pessoais desnecessários."
            }
        ]
    },
    {
        enunciado: "Você recebe um e-mail informando que precisa confirmar seus dados bancários com urgência. O que faz?",
        alternativas: [
            {
                texto: "Clica no link do e-mail e insere seus dados para resolver rápido.",
                afirmacao: "Caiu em um golpe de phishing por não verificar a autenticidade do e-mail. Phishing é um método comum de roubo de dados em que golpistas se passam por empresas confiáveis."
            },
            {
                texto: "Verifica o remetente e acessa o site oficial do banco para confirmar se é verdadeiro.",
                afirmacao: "Conseguiu evitar um golpe ao adotar uma atitude segura. Essa é a resposta certa porque sempre devemos confirmar a autenticidade de mensagens suspeitas, especialmente quando envolvem dados pessoais ou bancários."
            }
        ]
    },
    {
        enunciado: "Você cria uma nova senha para um site. Qual das opções abaixo você escolhe?",
        alternativas: [
            {
                texto: "Seu nome com a data de nascimento, para não esquecer.",
                afirmacao: "Sua senha ficou fraca e fácil de ser descoberta. Dados pessoais são as primeiras tentativas em ataques de força bruta ou engenharia social."
            },
            {
                texto: "Uma combinação de letras maiúsculas, números e símbolos, diferente de outras senhas.",
                afirmacao: "Você criou uma senha forte e mais difícil de ser invadida. Essa é a melhor prática porque dificulta ataques e evita acessos indevidos mesmo que outros dados sejam vazados."
            }
        ]
    },
    {
        enunciado: "Ao usar redes sociais, como você lida com as informações que publica?",
        alternativas: [
            {
                texto: "Publica tudo: localização, rotina, fotos de documentos e família.",
                afirmacao: "Expor demais sua vida online pode colocar sua segurança em risco. Informações pessoais podem ser usadas por golpistas ou até facilitar crimes como roubo de identidade."
            },
            {
                texto: "Evita expor dados sensíveis e ajusta a privacidade das postagens.",
                afirmacao: "Você se protege ao controlar o que compartilha e com quem compartilha. Isso é essencial para manter sua privacidade e segurança no ambiente digital."
            }
        ]
    },
    {
        enunciado: "Seu amigo envia um link dizendo que você ganhou um prêmio. O que você faz?",
        alternativas: [
            {
                texto: "Clica logo no link, afinal foi seu amigo quem mandou.",
                afirmacao: "Mesmo vindo de um amigo, o link era malicioso e seu dispositivo foi comprometido. Isso ocorre porque contas podem ser invadidas e usadas para enganar contatos próximos."
            },
            {
                texto: "Confirma com seu amigo se ele realmente enviou aquilo antes de clicar.",
                afirmacao: "Você evitou cair em um golpe ao confirmar a veracidade da mensagem. Isso é importante porque nem sempre uma mensagem vinda de alguém conhecido é segura — pode ser um perfil hackeado ou um golpe disfarçado."
            }
        ]
    },
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
    caixaPerguntas.textContent = "Sua jornada digital:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
