/*
@author: Aspira;
@description: Calcula quantos numeros sao negativos e positivos com 10 numeros de entrada;
@company: webschool;
*/

(function countPosNeg(){
    

  'use strict';

    
  var neg = 0,
      pos = 0;


  for(var i=0; i<10; i++){
    var getNumber = prompt('Digite um numero');

    if(parseInt(getNumber)<0){
      neg++;
    }else{
      pos++;
    }
  }


  console.log(pos+' Positivos '+neg+' Negativos');


})();