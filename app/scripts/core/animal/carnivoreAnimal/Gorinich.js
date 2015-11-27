function Gorinich(){
  CarnivoreAnimal.apply(this, arguments);
  this.type = "Gorinich";
  this.voice = "Gorinich voice";
}

Gorinich.prototype = Object.create(CarnivoreAnimal.prototype);
Gorinich.prototype.constructor = Gorinich;
