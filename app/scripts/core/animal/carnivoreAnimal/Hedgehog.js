function Hedgehog(){
  CarnivoreAnimal.apply(this, arguments);
  this.type = "Hedgehog";
  this.voice = "Hedgehog voice";
}

Hedgehog.prototype = Object.create(CarnivoreAnimal.prototype);
Hedgehog.prototype.constructor = Hedgehog;
