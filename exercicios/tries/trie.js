/*
 * Trie is a ordered tree data struct used to store mainly strings. They
 * consists in a tree where each node can have a value and the links have a
 * single character. A trie is aways travesed from the root to the child nodes.
 * A node with a non-null value means that the word represented by the chars
 * from the root to this node contained in the trie, and the value of this node
 * is aways exactly the word mentioned.
*/

var Trie = function(){
  this.value = null;
  this.childs = {};
};

Trie.prototype.insert = function(data){
  var wordIndex, word, charIndex, wordLen, node;

  if(data === null){
    return;
  }else if(toString.call(data) === '[object String]'){
    //If is a string split is in single words
    data = data.split(' ');
  }else if(toString.call(data) !== '[object Array]'){
    throw('The input must be null, a string or an array');
  }

  for(wordIndex in data){
    // For each word inserted 
    word = data[wordIndex];
    node = this;

    for(charIndex = 0, wordLen = word.length; charIndex < wordLen;
        charIndex++){
      var character = word.slice(charIndex, charIndex + 1);
      var remainingString = word.slice(charIndex + 1);

      if(!node.childs[character]){
        node.childs[character] = new Trie(remainingString);
      }
      node = node.childs[character]; 
    }

    node.value = word;
  }
};


Trie.prototype.search = function(word){
  var node = this;
  var charIndex = 0;
  var charOnIndex;
  while(node && charIndex < word.length){ 
    charOnIndex = word.slice(charIndex, charIndex+1);
    charIndex += 1;
    node = node.childs[charOnIndex];
  }

  if(node && node.value === word){
    return node;
  }else{
    return null;
  }
};


Trie.prototype.delete = function(data){
  var word, wordIndex, charIndex, node, childStack, stackLen, index,
    charToRemove;
  if(data === null){
    return;
  }else if(toString.call(data) === '[object String]'){
    data = data.split(' ');
  }else if(toString.call(data) !== '[object Array]'){
    throw('The input must be null, a string or an array');
  }

  for(wordIndex in data){
    charIndex = 0;
    word = data[wordIndex];
    childStack = [];
    node = this;
    while(node && charIndex < word.length){ 
      // Store the nodes and the childs that store the word
      charOnIndex = word.slice(charIndex, charIndex + 1);
      charIndex += 1;
      childStack.push({charToRemove: charOnIndex, node: node});
      node = node.childs[charOnIndex];
    }

    if(node && node.value === word){
      // If the word is defined in the trie, climb it removing the nodes
      // util find a node that is used by other word.
      stackLen = childStack.length;
      for(index = stackLen - 1; index >= 0; index--){
        node = childStack[index].node;
        charToRemove = childStack[index].charToRemove;
        if(Object.keys(node.childs[charToRemove].childs).length >= 1){
          break;
        }
        delete node.childs[charToRemove];
      }
    }
  }
};

module.exports = {
  Trie: Trie
};
