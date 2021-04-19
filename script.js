console.log("Test test test");

const nouns = ['A tiger','Lisa', 'Craig','A bat'];
const verbs = ['yelled at','ate', 'caught','tripped'];
const things = ['bowl','guy','lamp','lamb'];

const randoNoun = Math.floor(Math.random()*4);
const randoVerb = Math.floor(Math.random()*4);
const randoThing = Math.floor(Math.random()*4);

const message = `${nouns[randoNoun]} ${verbs[randoVerb]} the ${things[randoThing]}.`;
console.log(message);