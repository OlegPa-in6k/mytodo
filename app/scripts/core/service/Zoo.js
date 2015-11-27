function Zoo() {
  var filler = new Filler();
  var self = this;
  var animals = filler.getAnimals();
  var types = filler.getAllTypes();
  var herbivoreAnimals = [];
  var carnivoreAnimals = [];
  this.chat = [];

  this.getChat = function getChat(){
    return self.chat;
  }
  this.getAllTypes = function getAllTypes() {
    return types;
  }
  this.getAnimals = function getAnimals() {
    return animals;
  }

  this.addAnimal = function addAnimal(animal) {
    var newAnimal;
    switch (animal.type) {
      case "Tiger":
      newAnimal = new Tiger(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
      case "Elephant":
      newAnimal = new Elephant(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
      case "Hedgehog":
      newAnimal = new Hedgehog(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
      case "Lion":
      newAnimal = new Lion(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
      case "Rabbit":
      newAnimal = new Rabbit(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
      case "Zebra":
      newAnimal = new Zebra(animal.name, animal.eatTime, animal.activity, animal.size);
        break;
    }
    animals.unshift(newAnimal);

  }

  this.feedAnimal = function feedAnimal(animal) {
    for (var i = 0; i < animals.length; i++) {
      if ( animals[i] == animal )
          animal.setHunger();
    }
    self.chat.unshift(animal.name + " just get feed!")
  }



  this.removeAnimal = function removeAnimal(animal) {
      for (var i = 0; i < animals.length; i++) {
      if ( animals[i] == animal )
        animals.splice(i, 1);
    }
    self.chat.unshift(animal.name + " was killed by manager!"  );
  }

  this.tick = function() {
    for (var i = 0; i < animals.length; i++) {
      animals[i].tickVoice();
      animals[i].tickEatTime();

      if(animals[i].getEatTime() == animals[i].getHungerTime() ) {

            self.chat.unshift(animals[i].getName() + " just die!");
            self.removeAnimal(animals[i]);
            break;
      }

      if (animals[i].getVoiceTime() == animals[i].getActivity()) {
        self.chat.unshift(animals[i].getName() + " : " + animals[i].getVoice());
        animals[i].wasVoice();
      }

    }
  }

  this.getHerbivoreAnimals = function getHerbivoreAnimals() {
    for (var j = 0; j < animals.length; j++) {
      if(animals[j] instanceof HerbivoreAnimal ) {
        herbivoreAnimals.push(animals[j]);
      }
    }
    return herbivoreAnimals;
  }

  this.getCarnivoreAnimals = function getCarnivoreAnimals() {

    for (var k = 0; k < animals.length; k++) {
      if(animals[k] instanceof CarnivoreAnimal ) {
        carnivoreAnimals.push(animals[k]);
      }
    }
    return carnivoreAnimals;
  }

}
