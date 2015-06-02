/*
@author: Bruno Farina;
@description: Algoritmo Fibonacci;
@company: CEASB/PTI;
*/

fibonacci = function(n) {
	'use strict';
    var primeiro = 0,
        segundo = 1,
        prox, c;

    for (c = 0; c <= n; c++) {
        if (c <= 1) {
            prox = primeiro + segundo;
            console.log('[' + c + ']: ' + prox);
        } else {
            prox = primeiro + segundo;
            primeiro = segundo;
            segundo = prox;
            console.log('[' + c + ']: ' + prox);
        }
    }
};