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
// console.log(removeDuplicates('google this is a test'));


//drill 5
// input string
//output boolean


function pal(string) {
    let newMap = new HashMap()

    for(let i = 0; i < string.length; i++) {
        newMap.set(i, string[i])
    }
    
    let curr = ''
    let currVal = 0
    let newNewMap = new HashMap()

    for(let i = 0; i < string.length; i++) {
        curr = string[i]
        currVal = 0
        for(let j = 0; j < newMap.length; j++) {
            if(curr === newMap.get(j)) {
                currVal += 1
                newNewMap.set(curr, currVal)
            }
        }
    } 
    
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(newNewMap.get(string[i]) % 2 !== 0) {
            count += 1
        }
    }

    return count > 1 ? false : true
}

console.log(pal('paul'))

// set them all, count with string