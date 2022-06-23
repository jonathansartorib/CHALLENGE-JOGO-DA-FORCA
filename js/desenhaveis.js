//desenhaveis para o Canvas

function escreverTracinhos() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.strokeStyle = "#0A3871";
	tabuleiro.beginPath();

	var eixo = 600 / palavraSecreta.length;
	for (let i = 0; i < palavraSecreta.length; i++) {
		tabuleiro.moveTo(500 + (eixo * i), 640);
		tabuleiro.lineTo(550 + (eixo * i), 640);
	}

	tabuleiro.stroke();
	tabuleiro.closePath();
}

function escreverLetraCorreta(index) {
	tabuleiro.font = 'bold 52px Arial'
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.strokeStyle = "#0A3871";

	var eixo = 600 / palavraSecreta.length;

	tabuleiro.beginPath();
	tabuleiro.fillText(palavraSecreta[index], 505 + (eixo * index), 620);
	palavraCompleta.push(palavraSecreta[index]);
	console.log("palavraCompleta " + palavraCompleta);
	tabuleiro.stroke();
}

function desenharForca() {
	tabuleiro.lineWidth = 20;
	tabuleiro.lineCap = "butt";
	tabuleiro.lineJoin = "miter";
	tabuleiro.strokeStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(100, 750);
	tabuleiro.lineTo(300, 750);
	tabuleiro.stroke();

	tabuleiro.beginPath();
	tabuleiro.moveTo(200, 750);
	tabuleiro.lineTo(200, 50);
	tabuleiro.stroke();

	tabuleiro.beginPath();
	tabuleiro.moveTo(190, 50);
	tabuleiro.lineTo(600, 50);
	tabuleiro.stroke();

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 40);
	tabuleiro.lineTo(600, 80);
	tabuleiro.stroke();

	tabuleiro.beginPath();
	tabuleiro.lineWidth = 5;
	tabuleiro.moveTo(600, 80);
	tabuleiro.lineTo(600, 125);
	tabuleiro.stroke();
}

function desenharCabeca() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.arc(600, 160, 30, 0, Math.PI * 2);
	tabuleiro.fill();
}

function desenharCorpo() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 175);
	tabuleiro.lineTo(600, 330);
	tabuleiro.stroke();
}

function desenharBracoEsquerdo() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 205);
	tabuleiro.lineTo(550, 270);
	tabuleiro.stroke();
}

function desenharBracoDireito() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 205);
	tabuleiro.lineTo(650, 270);
	tabuleiro.stroke();
}

function desenharPernaEsquerda() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 330);
	tabuleiro.lineTo(550, 410);
	tabuleiro.stroke();
}

function desenharPernaDireita() {
	tabuleiro.lineWidth = 6;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#000";

	tabuleiro.beginPath();
	tabuleiro.moveTo(600, 330);
	tabuleiro.lineTo(650, 410);
	tabuleiro.stroke();
}

function voceGanhou() {

	tabuleiro.clearRect(0, 0, 1200, 860);

	function ganhou() {
		tabuleiro.fillStyle = 'black';
		tabuleiro.fillRect(0, 0, 1200, 300);
		tabuleiro.fillRect(0, 300, 300, 300);
		tabuleiro.fillRect(900, 300, 1200, 300);
		tabuleiro.fillRect(0, 560, 1200, 300);

		tabuleiro.font = 'bold 60px Arial';
		tabuleiro.fillText('VOCÊ GANHOU!!', 370, 450);

		tabuleiro.font = 'bold 30px Arial';
		tabuleiro.fillText("Palavra secreta é: " + palavraSecreta, 370, 520);
		numeroVitorias();
	}
	setTimeout(ganhou, 1000);
}

function vocePerdeu() {

	tabuleiro.clearRect(0, 0, 1200, 860);

	function perdeu() {
		tabuleiro.fillStyle = 'black';
		tabuleiro.fillRect(0, 0, 1200, 300);
		tabuleiro.fillRect(0, 300, 300, 300);
		tabuleiro.fillRect(900, 300, 1200, 300);
		tabuleiro.fillRect(0, 560, 1200, 300);

		tabuleiro.font = 'bold 60px Arial';
		tabuleiro.fillText('VOCÊ PERDEU!!', 370, 450);

		tabuleiro.font = 'bold 30px Arial';
		tabuleiro.fillText("Palavra secreta é: " + palavraSecreta, 370, 520);
		numeroVitorias();
	}
	setTimeout(perdeu, 1000);
}

function numeroVitorias() {
	tabuleiro.fillStyle = 'black';
	tabuleiro.font = 'bold 20px Arial';
	tabuleiro.fillText('Vitorias: ' + vitorias, 370, 350);
	tabuleiro.fillText('Derrotas: ' + derrotas, 550, 350);
}

