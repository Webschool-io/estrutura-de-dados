var Matriz = require('./matriz-transposta'),
  assert = require("assert");

/*
type: md

**Precisa ser matriz?**

- Teste para verificar o tipo do objeto que será transposto, 
já que só podemos aceitar Arrays.


**Precisa ser matriz quadrada**
- Só podemos transpor uma matriz quadrada

****
- 

*/
describe('Matriz Transposta', function () {
  describe('Precisa ser matriz', function () {
    it('Verificando se o objeto é um Array', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      var mt = Matriz.matriz_transposta(l, c, matriz);
      // console.log('typo: ', matriz instanceof Array);
      assert(matriz instanceof Array);
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
      var lines = Matriz.countLines(l, c, matriz);
      // console.log();
      assert.equal(l, lines);
    });
    it('Verificando quantidade de colunas', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      // var mt = Matriz.matriz_transposta(l, c, matriz);
      var columns = Matriz.countColumns(l, c, matriz);
      // console.log();
      assert.equal(c, columns);
    });
    it('Verificando se é quadrada', function () {
      var l = 5, c = 5;
      var matriz = [[2, 2, 2, 2, 2],
           [1, 0, 0, 0, 1],
           [1, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

      // var mt = Matriz.matriz_transposta(l, c, matriz);
      var columns = Matriz.countColumns(l, c, matriz);
      var lines = Matriz.countLines(l, c, matriz);
      var total = Matriz.countElements(l, c, matriz);
      // console.log();
      assert.equal(total/c, columns);
      assert.equal(total/l, lines);
    });
  });

  describe('Matriz Transposta', function () {
    it('precisa ser igual', function () {
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