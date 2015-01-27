/*
@author: Aspira;
@description: Descobre o maior e menorr numero em um total de 10 entradas;
@company: webschool;
*/

(function(){

	'use strict';

	var gtN = 0, //maior numero
		ltN = 0; //menor numero

	for(var i = 0; i<10; i++){
		var getNumber = prompt("Digite um numero inteiro: ");

		//Atribuir valor ao maior e menor caso apenas um numero digitado
		if(i===0){
			gtN = getNumber;
			ltN = getNumber;
		}

		if(getNumber > gtN) { gtN = getNumber;}
		if(getNumber < ltN) { ltN = getNumber;}
	} 


	console.log("Menor numero digitado: "+ltN);
	console.log("Maior numero digitado: "+gtN);


})();