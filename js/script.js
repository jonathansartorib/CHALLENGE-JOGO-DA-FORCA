var palavras = ['alura', 'oracle', 'HTML', 'Javascript', 'CSS'];
var palavraSecreta = "";
var tabuleiro = document.getElementById('forca').getContext('2d');
var btnJogar = document.getElementById('btnJogar');
var letrasErradas = [];
var letrasCertas = [];
var palavraCorreta = "";
var palavraCompleta = [];
var erros = 0;
var vitorias = 0;
var derrotas = 0;


adicionarPalavra();

btnJogar.addEventListener("click", function (event) {
	event.preventDefault();

	iniciaNovoJogo();

	setTimeout(jogando, 500);

	var txtArea = document.querySelector('#txtArea');
	txtArea.classList.add("invisible");
	var btnAdicionarPalavra = document.querySelector('#btnAdicionar');
	btnAdicionarPalavra.classList.add("invisible");
	var paragrafo = document.querySelector('#paragrafo');
	paragrafo.textContent = "Jogando... Não é mais possivel inserir novas palavras";
	var botaoJogar = document.querySelector('#btnJogar');
	botaoJogar.textContent = "Novo Jogo";
});

function iniciaNovoJogo() {

	palavraSecreta = ""
	letrasErradas = [];
	letrasCertas = [];
	palavraCorreta = "";
	palavraCompleta = [];
	erros = 0;
	tabuleiro.clearRect(0, 0, 1200, 860);

	const elements = document.getElementsByClassName('listaCaracteresItens');
	for (const element of elements) {
		element.style.backgroundColor = 'white';
	}
}

function jogando() {

	escreverTracinhos(escolherPalavraSecreta());
	desenharForca();
	admJogo();
}
















