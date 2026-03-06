const PASSWORD_CORRETA = "13/07/2025";

const screens = {
	password: document.getElementById("password-screen"),
	intro: document.getElementById("intro-screen"),
	letter: document.getElementById("letter-screen"),
};

const passwordInput = document.getElementById("password-input");
const unlockBtn = document.getElementById("unlock-btn");
const openLetterBtn = document.getElementById("open-letter-btn");
const loveBtn = document.getElementById("love-btn");
const hintEl = document.querySelector(".hint");
const letterTextEl = document.getElementById("letter-text");
const letterContainerEl = document.querySelector(".letter-container");
const bgMusic = document.getElementById("bg-music");
const floatingAlert = document.getElementById("floating-alert");
const floatingAlertMessage = document.getElementById("floating-alert-message");
const floatingAlertCloseBtn = document.getElementById("floating-alert-close-btn");
const VELOCIDADE_DIGITACAO = 1;

const introText = `Meu amor, eu fiz esse pequeno gesto pensando que seria uma forma diferente de você receber a minha primeira carta rsrs.
Acredite ou não, eu tenho um pouco de dificuldade para traduzir alguns pensamentos em palavras, então me perdoe se eu não escrever tão bem neste primeiro momento.
Mas saiba que fiz isso de coração.`;

const letterText = `Tudo começou no dia 2 de março de 2025. Me lembro que naquela manhã eu acordei um pouco triste.
Estava um pouco infeliz com o trabalho, desanimado porque as coisas na faculdade não pareciam que dariam certo.
Ao mesmo tempo que eu tinha uma boa expectativa de futuro, também tinha medo de que todos os dias fossem iguais e que minha vida fosse somente aquilo.

Até que, por um feliz acaso, minha mãe, muito curiosa para conhecer a sobrinha de uma amiga dela, insistiu para que eu fosse junto com ela para conhecê-la.
A sobrinha é uma cantora com a voz mais linda que já ouvi em toda a minha vida.
Eu já tinha ouvido falar dela na minha adolescência; toda a família dela sente orgulho quando fala o nome dela.

Emanuelly.
Um nome tão belo, fazendo jus a uma mulher de beleza incomparável.

Me lembro que naquela noite minha mãe, por causa de um acidente na faculdade, não pôde ir ao culto. E como eu já havia me comprometido a ir, fui sozinho naquela noite.
Sentei-me com meus amigos (que eram da família dela). O culto estava em um ambiente confortável, e o clima daquela noite estava agradável.
Eu acreditava que seria apenas mais uma noite comum.

Foi quando algo inesperado aconteceu.

Eu já a tinha visto pelas redes sociais, mas quando a vi pessoalmente, nem mil imagens mostrariam o que meus olhos viram naquela noite.
A sensação que meu corpo sentiu naquele momento foi como um impulso elétrico que acelerou as batidas do meu coração.

Por uma fração de tempo, eu me esqueci de tudo à minha volta. Não sabia nem onde estava.
Eu só pensava que aquela era a mulher mais linda que já vi em toda a minha vida.

Mas, quando recobrei a consciência, eu disse a mim mesmo que estava delirando. Eu não a conhecia, não podia esperar nada.

Bom… foi o que eu disse a mim mesmo.

Passado o culto, eu percebi algo estranho.
Por um feliz momento, ela tomou a iniciativa e me disse algo bobo (mal sabia eu que ela também tinha prestado atenção em mim).

Depois disso, a família dela quis se reunir para comer fora e me convidaram naquela noite.
E justamente eu e ela ficamos próximos um do outro (depois fui descobrir que ela fez isso intencionalmente).

O que ela não sabe — e nem eu sabia — era o porquê.
Normalmente eu fico desconfortável e desconfiado de pessoas que não conheço, não importa se acho bonitas ou não.
Mas naquela noite, especificamente aquela mulher me gerava uma sensação de conforto.

E eu pensava comigo mesmo: por quê?

Nós conversamos um pouco de tudo naquela noite.
Conheci um pouco da história dela, do que estudava e até do que gostava (tanto que ela só fala de açaí até hoje).

E, conforme nossa conversa acontecia, eu me sentia cada vez mais à vontade com ela — tanto para falar da minha vida quanto para querer saber mais da dela.
Foi espetacular.

As horas passaram como minutos naquele momento.

Voltei dirigindo, mas meus pensamentos apenas reviviam os momentos que tive com ela durante a volta para casa.

E quando finalmente cheguei em casa naquela noite, e estava em um ambiente seguro, eu gritei.
Gritei para minha mãe e disse que tinha visto a mulher mais linda desse mundo.

Fiquei horas falando para minha mãe o quanto eu admirei aquela mulher.
Fiquei incomodado pensando: como uma mulher com quem eu nunca tinha conversado em toda a minha vida antes conseguiu me deixar assim em uma única noite?

Naquela mesma noite fui convidado para um jantar de família deles que aconteceria um dia depois.
Eu não quis demonstrar nenhum sinal de emoção, pois nem eu mesmo estava entendendo o que estava sentindo.

Então tive uma reação mais tranquila…
porém, eu estava quase explodindo por dentro.

Depois daquela noite, o tempo parecia que não passava.
24 horas se tornaram uma eternidade para mim.

Eu estava ansioso para vê-la mais uma vez.
Dessa vez, em um ambiente mais casual, onde eu poderia conversar com ela diretamente.

E quando finalmente chegou o dia…

Eu a vi.

Ela estava mais à vontade, acreditando que só estaria a família.
Mas ela não sabia que, mesmo tão “simples”, eu tive aquela sensação novamente.

Por um breve momento, eu apaguei tudo à minha volta e só conseguia observar ela.
Como ela era tão linda.
Tem uma beleza tão única sem fazer esforço algum.

Não tivemos muito contato naquela noite.
Estávamos em um grupo de jovens (os primos dela).

Mas eu reparava em cada detalhe dela.

Até que, na hora de ir embora, tivemos 10 minutos de conversa.
E foi nesses 10 minutos que minha vida mudou.

Ela me contou da cidade dela e o quanto era apaixonada por aquele lugar.
Eu via o brilho nos olhos dela, e aquilo me encantou.

Então tive a iniciativa de perguntar se eu podia ter o telefone dela, já acreditando que receberia um grande não.

Mas, por um milagre que aconteceu naquela noite…
ela aceitou.

E depois disso…

Nunca mais fui dormir sem ter um boa noite dela.
Nunca mais acordei sem um bom dia.

Todos os dias ela transforma o meu dia no melhor dia da minha vida.

Eu anseio para vencermos essas barreiras da distância e conseguirmos conquistar o nosso matrimônio.
Para enfim acordar todos os dias olhando para a mulher mais linda desse mundo.

Ela gera em mim forças para querer ser a melhor versão de mim por ela.
Ela me traz uma paz na alma que, quando meu dia parece um apocalipse, quando estou com ela sinto que estou no paraíso.

E eu espero, de verdade, que ela saiba que eu não sei medir o quanto a amo.

Mas eu sei que amo.
Amo com todo o meu coração.

Os sonhos dela são os meus sonhos.
Os objetivos dela são os meus.

E a cada dia, a cada passo, eu sinto que estou mais próximo dela.

E agora, depois de mais de um ano, sabendo que toda a minha vida virou do avesso, eu ainda me sinto tão apaixonado e sem palavras…
como no dia em que a conheci.

Eu espero que entenda isso, meu amor.

Feliz Dia das Mulheres (antecipado). ❤️`;

const CARTA_COMPLETA = `${introText}\n\n${letterText}`;

function showScreen(screenToShow) {
	Object.values(screens).forEach((screen) => {
		screen.classList.remove("active");
		screen.classList.add("hidden");
	});

	screenToShow.classList.remove("hidden");
	screenToShow.classList.add("active");

	if (bgMusic && screenToShow !== screens.letter) {
		bgMusic.pause();
		bgMusic.currentTime = 0;
	}
}

function digitarTexto(texto, elemento, velocidade = VELOCIDADE_DIGITACAO) {
	return new Promise((resolve) => {
		elemento.textContent = "";
		elemento.classList.add("typing");
		if (letterContainerEl) {
			letterContainerEl.scrollTop = 0;
		}
		let indice = 0;

		const intervalo = setInterval(() => {
			elemento.textContent += texto.charAt(indice);
			indice += 1;

			if (letterContainerEl) {
				letterContainerEl.scrollTop = letterContainerEl.scrollHeight;
			}

			if (indice >= texto.length) {
				clearInterval(intervalo);
				elemento.classList.remove("typing");
				resolve();
			}
		}, velocidade);
	});
}

function formatarData(valor) {
	const apenasNumeros = valor.replace(/\D/g, "").slice(0, 8);
	const dia = apenasNumeros.slice(0, 2);
	const mes = apenasNumeros.slice(2, 4);
	const ano = apenasNumeros.slice(4, 8);

	if (apenasNumeros.length <= 2) return dia;
	if (apenasNumeros.length <= 4) return `${dia}/${mes}`;
	return `${dia}/${mes}/${ano}`;
}

function abrirAlertaFlutuante(mensagem) {
	if (!floatingAlert || !floatingAlertMessage) return;
	floatingAlertMessage.textContent = mensagem;
	floatingAlert.classList.remove("hidden");
}

function fecharAlertaFlutuante() {
	if (!floatingAlert) return;
	floatingAlert.classList.add("hidden");
}

function validarSenha() {
	const valor = passwordInput.value.trim();

	if (valor === PASSWORD_CORRETA) {
		hintEl.textContent = "Senha correta! ❤️";
		hintEl.style.color = "#1f8a3b";
		showScreen(screens.intro);
		return;
	}

	hintEl.textContent = "Data errada. Tenta novamente, meu amor.";
	hintEl.style.color = "#c62828";
}

async function iniciarCarta() {
	showScreen(screens.letter);

	if (bgMusic) {
		bgMusic.volume = 0.25;
		bgMusic.currentTime = 0;
		bgMusic.play().catch(() => {});
	}

	loveBtn.classList.add("hidden");
	loveBtn.classList.remove("love-btn-animate");
	await new Promise((resolve) => setTimeout(resolve, 8000));
	await digitarTexto(CARTA_COMPLETA, letterTextEl);
	loveBtn.classList.remove("hidden");
	loveBtn.classList.add("love-btn-animate");
}

passwordInput.addEventListener("input", (event) => {
	event.target.value = formatarData(event.target.value);
});

passwordInput.addEventListener("keydown", (event) => {
	const teclasPermitidas = [
		"Backspace",
		"Delete",
		"Tab",
		"Escape",
		"Enter",
		"ArrowLeft",
		"ArrowRight",
		"Home",
		"End",
	];

	if (teclasPermitidas.includes(event.key)) {
		return;
	}

	const ehNumero = /^\d$/.test(event.key);
	if (!ehNumero) {
		event.preventDefault();
	}
});

passwordInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		validarSenha();
	}
});

unlockBtn.addEventListener("click", validarSenha);
openLetterBtn.addEventListener("click", iniciarCarta);
loveBtn.addEventListener("click", () => {
	abrirAlertaFlutuante("Eu te amo mais! ❤️");
});

if (floatingAlertCloseBtn) {
	floatingAlertCloseBtn.addEventListener("click", fecharAlertaFlutuante);
}

if (floatingAlert) {
	floatingAlert.addEventListener("click", (event) => {
		if (event.target.dataset.closeAlert === "true") {
			fecharAlertaFlutuante();
		}
	});
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && floatingAlert && !floatingAlert.classList.contains("hidden")) {
		fecharAlertaFlutuante();
	}
});
