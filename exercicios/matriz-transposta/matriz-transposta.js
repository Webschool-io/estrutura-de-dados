'use strict';

module.exports = {
  matriz_transposta: function (l, c, matriz) {
    var i, j, aux;

    for (i = 0; i < l; i++) {
      for (j = i + 1; j < c; j++) {
        if (j !== i) {
          aux = matriz[i][j];
          matriz[i][j] = matriz[j][i];
          matriz[j][i] = aux;
        }
      }
    }
    return matriz;
  },
  generateRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  countElements: function (linhas, colunas, matriz) {
    var linhaCount, colunaCount, elementCount = 0;
    for (linhaCount = 0; linhaCount < linhas; linhaCount++) {
      for (colunaCount = 0; colunaCount < colunas; colunaCount++) {
        elementCount++;
      }
    }
    return elementCount;
  },
  countLines: function (matriz) {
    var linhaCount, colunaCount;
    for(linhaCount = 0; linhaCount < matriz.length; linhaCount++){
       for(colunaCount = 0; colunaCount < matriz[linhaCount].length; colunaCount++){
        // colunaCount++;
        // console.log('linha %d coluna %d', linhaCount, colunaCount);
        // console.log('colunaCount', colunaCount);
       }
    }

    return linhaCount;
  },
  countColumns: function (matriz) {
    return matriz.length;
  }
};
// module.exports = module;
