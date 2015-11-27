function Tiger(){
  CarnivoreAnimal.apply(this, arguments);
  this.type = "Lion";
  this.voice = "Lion voice";
}

Tiger.prototype = Object.create(CarnivoreAnimal.prototype);
Tiger.prototype.constructor = Tiger;
