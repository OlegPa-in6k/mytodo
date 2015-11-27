function Animal(name, type, eatTime, activity, size ){

  this.name = name;
  this.type = type;
  this.eatTime = eatTime *1000;
  this.hunger = 0;
  this.activity = activity * 1000;
  this.newActivity = 0;
  this.size = size;
  this.voice = "Animal voice";
  this.alive = true;

}

Animal.prototype.getName = function(){
  return this.name;
}

Animal.prototype.getType = function(){
  return this.type;
}

Animal.prototype.getSize = function(){
  return this.size;
}

Animal.prototype.getVoice = function(){
  return this.voice;
}

Animal.prototype.getActivity = function(){
  return this.activity;
}

Animal.prototype.getEatTime = function(){
  return this.eatTime;
}
Animal.prototype.isAlive = function() {
  return this.alive;
}


Animal.prototype.setActivity = function() {
  this.newActivity = 0;

}




Animal.prototype.tickEatTime = function() {
  this.hunger += 1000;
}

Animal.prototype.getHungerTime = function() {
  return this.hunger;
}

Animal.prototype.setHunger = function() {
  this.hunger = 0;
}

Animal.prototype.getVoiceTime = function() {
  return this.newActivity;
}

Animal.prototype.wasVoice = function() {
  this.newActivity = 0;
}

Animal.prototype.tickVoice = function() {
  this.newActivity += 1000;
}
