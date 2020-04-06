const HashMap = require('./hashmap');

function main() {
  const lotr = new HashMap();
  // lotr.MAX_LOAD_RATIO = 0.5;
  // lotr.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  // lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  // lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  lotr.set('test', 'testing');
  lotr.set('test2', 'testing2');

  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Ent'));
  console.log(lotr);
  console.log(lotr._capacity);
}

// main();

// drill 2

// retreiving values by their keys,
// although the keys have the same value, so the value of the key was replaced

// drill 3

// OPEN ADDRESSING
// const testArray = [22, 88, n2, 4, 15, 28, 17, 59, 31, 10, n10]

// SEPARATE CHAINING

// const testArray2 = [33, [12, 10], n2, 15, 5, [28, 17], n6, 19, 20] // modded by 11 instead of 9 by accident

function removeDuplicates(string) {
  let newMap = new HashMap();
  let newStr = '';

  // if character has not been added, add it. otherwise, leave it.

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    try {
      newMap.get(char);
    } catch (error) {
      getError = error;
      newMap.set(char, char);
      newStr += string[i];
    }
  }

  return newStr; // ?
}

// complexity O(n^2)
console.log(removeDuplicates('google this is a test'));

// PALINDROMES

// loop over string, either adding char to hash table as a key or increment the count (value) if it is already in the table. characters = key, count = value
// iterate through hash table to make sure char counts are all even or at most one value is odd.

function palindrome(string) {
  let newMap = new HashMap();
  let count = 1;
  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    charCount[char] = charCount[char] + 1 || 1;

    try {
      newMap.get(char);
      newMap[char] = charCount[char];
    } catch (e) {
      newMap.set(char, count);
    }
  }

  let charCountArray = Object.values(charCount); // ?
  let oddCount = 0;

  for (let i = 0; i < charCountArray.length; i++) {
    if (charCountArray[i] % 2 !== 0) {
      oddCount++;
    } else {
      oddCount += 0;
    }
  }
  return oddCount > 1 ? false : true;
}


console.log(palindrome('aceacrr'));
