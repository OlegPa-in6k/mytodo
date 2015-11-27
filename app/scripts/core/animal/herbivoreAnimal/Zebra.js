function Zebra(){
  HerbivoreAnimal.apply(this, arguments);
  this.type = "Zebra";
  this.voice = "Zebra voice";
}

Zebra.prototype = Object.create(HerbivoreAnimal.prototype);
Zebra.prototype.constructor = Zebra;
