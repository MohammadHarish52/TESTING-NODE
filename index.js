// getting the package from npm
const superheroes = require("superheroes");
const supervillains = require('supervillains');

// calling a func from the given package we installed
 var mySuperhero = superheroes.random();
 var mySupervillain = supervillains.random();

 console.log(mySuperhero + "  " +  mySupervillain);