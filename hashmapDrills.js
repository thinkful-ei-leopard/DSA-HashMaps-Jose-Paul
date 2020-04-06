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

main();



// drill 2

// retreiving values by their keys, 
// although the keys have the same value, so the value of the key was replaced