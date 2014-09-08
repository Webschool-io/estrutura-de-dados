/*
@author: Aspira;
@description: Caltula o fatorial do número digitado;
@company: webschool;
*/

(function fat(){

	'use strict';


	var getNumber = prompt('Ditie um numero'),
		result = getNumber;


	getNumber = Number(getNumber);


	while(getNumber>1) {
		result *= --getNumber;
	}


	return result;


})();