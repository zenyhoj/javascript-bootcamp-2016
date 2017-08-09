/**
 * Created by joebals on 8/7/2017.
 */
const animals = [
    { name: 'Mojo',    species: 'cat' },
    { name: 'Meow',    species: 'dog' },
    { name: 'Whitey',    species: 'dog' },
    { name: 'barry',    species: 'mouse' },
    { name: 'kingkong',    species: 'bear' }

];

var dog = animals.filter(function(animal){
  return   animal.species === 'dog';

})

console.log(dog);