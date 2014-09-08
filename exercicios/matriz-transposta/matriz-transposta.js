
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

    // for (i = 0; i < l; i++) {
    //   for (j = 0; j < c; j++) {
    //     console.log("%d ", matriz[i][j]);
    //   }
    //   console.log("\n");
    // }
    // console.log('Matriz transposta', matriz);

    return matriz;
  },
  generateRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  countElements: function (linhas, colunas, matriz) {
    var linhaCount, colunaCount, elementCount = 0;
    // console.log(matriz);
    for (linhaCount = 0; linhaCount < linhas; linhaCount++) {
      // console.log('linhas: ', matriz[linha][coluna]);
      // console.log(linhaCount);
      for (colunaCount = 0; colunaCount < colunas; colunaCount++) {
        elementCount++;
      }
    }
    // console.log(elementCount);
    return elementCount;
  },
  countLines: function (linhas, colunas, matriz) {
    var linhaCount, colunaCount, elementCount = 0;
    // console.log(matriz);
    for (linhaCount = 0; linhaCount < linhas; linhaCount++) {
      // console.log('linhas: ', matriz[linha][coluna]);
      // console.log(linhaCount);
      for (colunaCount = 0; colunaCount < colunas; colunaCount++) {
        elementCount++;
      }
    }
    // console.log(elementCount);
    return linhaCount;
  },
  countColumns: function (linhas, colunas, matriz) {
    var linhaCount, colunaCount, elementCount = 0;
    // console.log(matriz);
    for (linhaCount = 0; linhaCount < linhas; linhaCount++) {
      // console.log('linhas: ', matriz[linha][coluna]);
      // console.log(linhaCount);
      for (colunaCount = 0; colunaCount < colunas; colunaCount++) {
        elementCount++;
      }
    }
    // console.log(colunaCount);
    return colunaCount;
  }
}

// module.exports = module;


// var l = 5,
//     c = 5;

// var matriz = [];
// matriz = [[2,2,2,2,2],  
//      [1,0,0,0,1],  
//      [1,0,1,0,1],
//      [1,0,0,0,1],  
//      [1,1,1,1,1]];

// console.log('Matriz', matriz);
// console.log('aaa', module.matriz_transposta(l, c, matriz));

// matriz_transposta (l, c, matriz);