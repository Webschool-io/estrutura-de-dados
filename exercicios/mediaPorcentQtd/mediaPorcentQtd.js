/*
@author: Aspira;
@description: Calcula Media, quantidade de negativos e positivos e suas pocentagens em um total de 10 entradas;
@company: webschool;
*/

(function countPosNeg(){
    

  'use strict';

    
  var media,
      sum = 0,
      neg = 0,
      pos = 0;


  for(var i=0; i<10; i++){
    var getNumber = prompt('Digite um numero');

    if(parseInt(getNumber)<0){
      neg++;
    }else{
      pos++;
    }

    sum = sum+parseInt(getNumber);

  }

  media = sum/10;

  console.log('Media: '+media*100);
  console.log(pos+' Positivos '+neg+' Negativos');
  console.log('Positivos: '+(pos/10)*100+'%' );
  console.log('Negativos: '+(neg/10)*100+'%' );


})();
