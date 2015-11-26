function Zoo() {
  var self = this;
  var animals = [];
  var types = [];
  var herbivoreAnimals = [];
  var carnivoreAnimals = [];

  var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 2, 1, 100);
  var hedgehog2  = new Hedgehog("Boba", "Hedgehog", 20, 5, 100);
  var elephant1  = new Elephant("Smoffy", "Elephant", 15, 10, 500);
  var elephant2  = new Elephant("Smok", "Elephant", 10, 12, 500);

  types.push("Tiger");
  types.push("Elephant");
  types.push("Hedgehog");
  types.push("Lion");

  animals.push(hedgehog1);
  animals.push(hedgehog2);
  animals.push(elephant1);
  animals.push(elephant2);

  this.getAllTypes = function getAllTypes() {
    return types;
  }

  this.addAnimal = function addAnimal(animal) {
    animals.push(animal);
  }

  this.getAnimals = function getAnimals() {
    return animals;
  }

  this.removeAnimal = function removeAnimal(animal) {
    for (var i = 0; i < animals.length; i++) {
      if ( animals[i] == animal )
        animals.splice(i, 1);
    }
  }

  this.getHerbivoreAnimals = function getHerbivoreAnimals(animals) {

    for (var j = 0; j < animals.length; j++) {
      if(animals[j] instanceof HerbivoreAnimal ) {
        herbivoreAnimals.push(animals[j]);
      }
    }
    return herbivoreAnimals;
  }

  this.getCarnivoreAnimals = function getCarnivoreAnimals(animals) {

    for (var k = 0; k < animals.length; k++) {
      if(animals[k] instanceof CarnivoreAnimal ) {
        carnivoreAnimals.push(animals[k]);
      }
    }
    return carnivoreAnimals;
  }

}
