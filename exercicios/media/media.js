/*
@author: Aspira;
@description: Calcula a média de 10 numeros de entrada;
@company: webschool;
*/


(function media(){
    

  'use strict';

    
  var result,
  	  sum = 0;



  for(var i =0; i<10; i++){
    var getNumber = prompt('Digite um numero');

    sum = sum+parseInt(getNumber);

    if(i===10){
      i = null;
    }
  }

  result = sum/i;


  console.log('Media: '+result); 


})();