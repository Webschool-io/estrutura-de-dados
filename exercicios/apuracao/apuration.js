/*
@author: Aspira;
@description: Apuracao das eleicoes;
@company: webschool;
*/


(function apuration(){

  'use strict';


  console.log('Belmiro 1 \nJucara: 2 \nCarlos: 3');
  alert('Belmiro 1 \nJucara: 2 \nCarlos: 3');
  

  var belmiro = 0,
      jucara = 0,
      carlos = 0;


  for(var i=0; i<5; i++){

    var getNumber = prompt('Digite o numero do seu candidato');
        getNumber = parseInt(getNumber);
           
   
    switch( getNumber ){
      case 1:
        belmiro++;
        break;
      case 2:
        jucara++;
        break;
      case 3:
        carlos++;
        break;
    }

  }


  console.log('Belmiro '+belmiro+' Jucara '+jucara+' Carlos '+carlos);
  alert('Belmiro '+belmiro+' Jucara '+jucara+' Carlos '+carlos);


})();