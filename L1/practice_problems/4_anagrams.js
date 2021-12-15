function anagram(word, list) {
  let key = word.split('').sort().join('');
  return list.filter(word => word.split('').sort().join('') === key);
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);