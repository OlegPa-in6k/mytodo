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

      if(animals[i].isTimeToEat() ) {
          if(animals[i] instanceof HerbivoreAnimal) {
             self.chat.unshift(animals[i].getName() + " herbivoreAnimal die!");
             self.removeAnimal(animals[i]);
             }
           else {
            self.chat.unshift(animals[i].getName() + " carnivoreAnimal die!");
             self.removeAnimal(animals[i]);
           }
      }
      if (animals[i].isTimeToVoice()) {
        self.chat.unshift(animals[i].getName() + " : " + animals[i].getVoice());
        animals[i].wasVoice();
      }

    }
  }

  this.getHerbivoreAnimals = function getHerbivoreAnimals() {
    for (var i = 0; i < animals.length; i++) {
      if(animals[i] instanceof HerbivoreAnimal ) {
        herbivoreAnimals.push(animals[i]);
      }
    }
    return herbivoreAnimals;
  }

  this.getCarnivoreAnimals = function getCarnivoreAnimals() {
    for (var i = 0; i < animals.length; i++) {
      if(animals[i] instanceof CarnivoreAnimal ) {
        carnivoreAnimals.push(animals[i]);
      }
    }
    return carnivoreAnimals;
  }

}
