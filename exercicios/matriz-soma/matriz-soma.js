function cria_matriz(x,y){
  mt = new Array();
  for(i=0; i<x; i++){
    mt[i] = new Array();
    for(j=0; j<y; j++){
      mt[i][j] = -1;
    }
  }
  return mt;
}


module.exports = function (matriz_1, matriz_2){
  //Como a soma de matrizes tem que ter a mesma dimensão vou pegar somente a matriz 1 como base
  var col  = matriz_1[0].length
  var lin  = matriz_1.length
  var msum = cria_matriz(lin,col);

  for(i=0; i<lin; i++){
    for(c=0; c<col; c++){
      msum[i][c] = matriz_1[i][c] + matriz_2[i][c];
    }
  }

  return msum;
}
