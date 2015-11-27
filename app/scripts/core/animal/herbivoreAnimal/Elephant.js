function Elephant(){
  HerbivoreAnimal.apply(this, arguments);
  this.type = "Elephant";
  this.voice = "Elephant voice";
}

Elephant.prototype = Object.create(HerbivoreAnimal.prototype);
Elephant.prototype.constructor = Elephant;
