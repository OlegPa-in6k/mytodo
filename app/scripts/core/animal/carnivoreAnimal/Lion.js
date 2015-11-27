function Lion(){
  CarnivoreAnimal.apply(this, arguments);
  this.type = "Lion";
  this.voice = "Lion voice";
}

Lion.prototype = Object.create(CarnivoreAnimal.prototype);
Lion.prototype.constructor = Lion;
