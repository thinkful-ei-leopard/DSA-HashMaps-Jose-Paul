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
    let newMap = new HashMap()
    let newStr = ''
    let curr = ''

    for(let i = 0; i < string.length; i++) {
        newMap.set(i, string[i])
        curr = newMap.get(i)
        if(!newStr.includes(curr)) {
            newStr += curr
        }
    }

    return newStr
}

// complexity O(n^2)
console.log(removeDuplicates("google all that you think can think of"))