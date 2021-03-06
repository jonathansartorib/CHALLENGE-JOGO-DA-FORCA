function adicionarPalavra() {

	var btnAdicionarPalavra = document.getElementById('btnAdicionar');
	var textoPalavraAdicionada = document.getElementById('spanChecaPalavra');

	btnAdicionarPalavra.addEventListener("click", function (event) {
		event.preventDefault();

		var palavraDigitada = document.querySelector("#txtArea");
		var novaPalavra = palavraDigitada.value;

		var tamanhoEhValido = true;
		var codigoEhValido = true;

		if (novaPalavra.length > 10) {
			tamanhoEhValido = false;
			textoPalavraAdicionada.textContent = "A Palavra deve ter menos de 10 caracteres";
			textoPalavraAdicionada.style.opacity = 1;

			function disableSpan() {
				textoPalavraAdicionada.style.opacity = 0;
			}
			setTimeout(disableSpan, 3000);
		}
		/*
				//TODO
				if (novaPalavra.includes() {
					codigoEhValido = false;
					textoPalavraAdicionada.textContent = "A Palavra não deve conter acentos nem caracteres especiais";
					textoPalavraAdicionada.style.opacity = 1;
			
					function disableSpan() {
					textoPalavraAdicionada.style.opacity = 0;
					}
				setTimeout(disableSpan, 3000);
				}                                                 
		*/
		if (tamanhoEhValido && codigoEhValido) {

			palavras.push(novaPalavra);

			console.log(palavras);
			console.log("PalavraDigitada = " + novaPalavra);

			textoPalavraAdicionada.textContent = "Palavra adicionada";
			textoPalavraAdicionada.style.opacity = 1;

			function disableSpan() {
				textoPalavraAdicionada.style.opacity = 0;
			}
			setTimeout(disableSpan, 3000);
		}
	});
}

function verificarLetra(codigo) {
	return codigo >= 65 && codigo <= 90;
}

function admJogo() {

	document.addEventListener("keydown", (evento) => {

		const codigo = evento.keyCode;

		if (verificarLetra(codigo)) {
			const letra = evento.key.toUpperCase();

			console.log("palavraSecreta " + palavraSecreta)
			console.log("letra " + letra);

			if (letrasErradas.includes(letra) || palavraCorreta.includes(letra)) {

				var textoPalavraRepetida = document.getElementById('spanChecaPalavra');
				textoPalavraRepetida.textContent = "Letra Repetida";
				textoPalavraRepetida.style.opacity = 1;

				function disableSpan() {
					textoPalavraRepetida.style.opacity = 0;
				}
				setTimeout(disableSpan, 3000);

			} else {

				if (palavraSecreta.includes(letra)) {
					adicionarLetraCorreta(palavraSecreta.indexOf(letra));
					for (let i = 0; i < palavraSecreta.length; i++) {
						if (palavraSecreta[i] === letra) {
							escreverLetraCorreta(i);
						}
					}
					letrasCertas.push(letra);
					var liLetraCerta = document.getElementById(letra);
					console.log(liLetraCerta);
					liLetraCerta.style.backgroundColor = "green";

				} else {
					letrasErradas.push(letra);
					var liLetraErrada = document.getElementById(letra);
					console.log(liLetraErrada);
					liLetraErrada.style.backgroundColor = "red";
					erros++;
					console.log("erros " + erros);
				}
			}
			atualizarJogo();
		}
	});
}

function atualizarJogo() {

	montarBoneco();
	if (palavraCompleta.length === palavraSecreta.length) {
		voceGanhou();
		
	}
	console.log("palavraCorreta = " + palavraCorreta);
}

function adicionarLetraCorreta(i) {
	palavraCorreta += palavraSecreta[i].toUpperCase();
}

function escolherPalavraSecreta() {
	var palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
	palavraSecreta = palavra;
	console.log(palavra);
	return palavra;
}

function montarBoneco() {

	switch (erros) {
		case 1:
			desenharCabeca();
			break;
		case 2:
			desenharCabeca();
			desenharCorpo();
			break;
		case 3:
			desenharCabeca();
			desenharCorpo();
			desenharBracoEsquerdo();
			break;
		case 4:
			desenharCabeca();
			desenharCorpo();
			desenharBracoEsquerdo();
			desenharBracoDireito();
			break;
		case 5:
			desenharCabeca();
			desenharCorpo();
			desenharBracoEsquerdo();
			desenharBracoDireito();
			break;
		case 6:
			desenharCabeca();
			desenharCorpo();
			desenharBracoEsquerdo();
			desenharBracoDireito();
			desenharPernaEsquerda();
			break;
		case 7:
			desenharCabeca();
			desenharCorpo();
			desenharBracoEsquerdo();
			desenharBracoDireito();
			desenharPernaEsquerda();
			desenharPernaDireita();
			setTimeout(vocePerdeu, 500);
			break;
	}
}
