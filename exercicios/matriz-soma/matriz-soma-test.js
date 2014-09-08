var matriz_soma = require('./matriz-soma');
var assert = require("assert")

describe('Matriz Soma', function(){
  describe('Matriz Somando', function(){
    it('precisa ser igual', function(){

      var mat1 = [[2,2,2], [1,1,1], [3,3,3]];
      var mat2 = [[3,4,4], [6,6,6], [5,5,5]];

      var mat_resul = [[ 5, 6, 6],[ 7, 7, 7],[ 8, 8, 8]];

      var mat_sum = matriz_soma(mat1, mat2);

      assert.deepEqual(mat_sum, mat_resul);
    })
  })
})
