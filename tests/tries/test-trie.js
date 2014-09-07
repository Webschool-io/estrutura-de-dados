'use strict'

var assert = require('assert')
  , TrieModule = require('../../exercicios/tries/tries').Trie
  , Trie = TrieModule.Trie;

describe('Trie', function() {
  it('should be defined', function(){
    assert(!!Trie);
  });

  it('should be instantiable if nothing, a string or an array is passed',
     function(){
    assert.doesNotThrow(function () {
      new Trie();
    });
  });

  it("should loads empty when nothing is passed", function(){
    var trie = new Trie(); 
    assert.equal(Object.keys(trie.childs).length, 0);
    assert.equal(trie.value, null);
  });

  describe('.insert', function () {
    it('should insert a single character in a empty trie', function() {
      var trie = new Trie();
      trie.insert('c');
      assert.equal(trie.childs.c.value, 'c');
    });
    
    it('should insert a word in a empty trie', function() {
      var trie = new Trie();
      trie.insert('text');
      assert.notEqual(trie.childs.t, undefined);
      var tTrie = trie.childs.t;
      assert.notEqual(tTrie.childs.e, undefined);
      var eTrie = tTrie.childs.e;
      assert.notEqual(eTrie.childs.x, undefined);
      var xTrie = eTrie.childs.x;
      assert.notEqual(xTrie.childs.t, undefined);
      var secoundTTrie = xTrie.childs.t; 
      assert.equal(secoundTTrie.value, 'text');
    });

    it('should insert words from a string', function() {
      var trie = new Trie();
      trie.insert('text test');
      assert.notEqual(trie.childs.t.childs.e.childs.x, undefined);
      assert.notEqual(trie.childs.t.childs.e.childs.s, undefined);
    });

    it('should insert words from a list of them', function() {
      var trie = new Trie();
      trie.insert(['text', 'test']);
      assert.notEqual(trie.childs.t.childs.e.childs.x, undefined);
      assert.notEqual(trie.childs.t.childs.e.childs.s, undefined);
    });
  });
  
  describe('.search', function() {
    it('should find a word', function(){
      var trie = new Trie();
      trie.insert('oi');
      assert.equal(trie.search('oi').value, 'oi');
    });
  });

  describe('.delete', function () {
    it('should empty a trie removing the single char in it', function(){
      var trie = new Trie();
      trie.insert('a');
      trie.delete('a');
      assert.equal(trie.childs.a, undefined);
    });
    
    it('should not delete nodes that defines more than one word', function(){
      var trie = new Trie();
      trie.insert(['text', 'test']);
      trie.delete('text');
      assert.notEqual(trie.childs.t, undefined);
      assert.notEqual(trie.childs.t.childs.e, undefined);
      assert.equal(trie.childs.t.childs.e.childs.x, undefined);
    });

    it('should delete multiple words', function(){
     var trie = new Trie();
     trie.insert(['text', 'test']);
     trie.delete(['text', 'test']);
     assert.equal(trie.childs.t, undefined);
    });
  });
});
