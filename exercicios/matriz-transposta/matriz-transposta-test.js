var Matriz = require('./matriz-transposta'),
  assert = require("assert");

/*global describe */
describe('Matriz Transposta', function () {
  describe('Precisa ser matriz', function () {
    /*global it */
    it('Verificando se o objeto é um Array', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      var mt = Matriz.matriz_transposta(l, c, matriz);
      assert(mt instanceof Array);
    });
  });

  describe('Precisa ser matriz quadrada', function () {
    it('Verificando quantidade de linhas', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      // var mt = Matriz.matriz_transposta(l, c, matriz);
      var lines = Matriz.countLines(matriz);
      // console.log();
      assert.equal(l, lines);
    });
    it('Verificando quantidade de colunas', function () {
      var valor_base = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      var colunas = Matriz.countColumns(matriz);
      assert.equal(valor_base, colunas);
    });
    it('Verificando se é quadrada', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      var columns = Matriz.countColumns(matriz);
      var lines = Matriz.countLines(matriz);
      var total = Matriz.countElements(l, c, matriz);

      assert.equal(total / c, columns);
      assert.equal(total / l, lines);
    });
  });

  describe('Precisa ser transposta', function () {
    it('Verificando se o retorno é a matriz transposta', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      var matriz_resultado =  [ [ 2, 1, 1, 1, 1 ],
        [ 2, 0, 0, 0, 1 ],
        [ 2, 0, 1, 0, 1 ],
        [ 2, 0, 0, 0, 1 ],
        [ 2, 1, 1, 1, 1 ] ];

      var mt = Matriz.matriz_transposta(l, c, matriz);
      assert.deepEqual(mt, matriz_resultado);
    });
  });
});