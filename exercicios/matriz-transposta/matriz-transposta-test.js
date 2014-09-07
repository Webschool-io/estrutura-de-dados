
var matriz_transposta = require('./matriz-transposta');
var assert = require("assert")

describe('Matriz Transposta', function(){
  describe('Matriz Transposta', function(){
    it('precisa ser igual', function(){
      
      var l=5, c=5, i, j;
      var matriz = [[2,2,2,2,2],  
       [1,0,0,0,1],  
       [1,0,1,0,1],
       [1,0,0,0,1],  
       [1,1,1,1,1]];

      var matriz_resultado =  [ [ 2, 1, 1, 1, 1 ],
        [ 2, 0, 0, 0, 1 ],
        [ 2, 0, 1, 0, 1 ],
        [ 2, 0, 0, 0, 1 ],
        [ 2, 1, 1, 1, 1 ] ];

      var mt = matriz_transposta(l, c, matriz);
      assert.deepEqual(mt, matriz_resultado);
    })
  })
})