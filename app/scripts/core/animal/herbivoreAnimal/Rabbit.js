function Rabbit(){
  HerbivoreAnimal.apply(this, arguments);
  this.type = "Rabbit";
  this.voice = "Rabbit voice";
}

Rabbit.prototype = Object.create(HerbivoreAnimal.prototype);
Rabbit.prototype.constructor = Rabbit;
