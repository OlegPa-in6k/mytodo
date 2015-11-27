function HerbivoreAnimal(){
  Animal.apply(this, arguments);
  this.voice = "HerbivoreAnimal voice";
}

HerbivoreAnimal.prototype = Object.create(Animal.prototype);
HerbivoreAnimal.prototype.constructor = HerbivoreAnimal;
