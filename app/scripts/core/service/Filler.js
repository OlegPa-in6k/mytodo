function Filler() {
var animals = [];
var types = [];

var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 2, 1, 100);
var hedgehog2  = new Hedgehog("Boba", "Hedgehog", 9, 5, 20);

var elephant1  = new Elephant("Smoffy", "Elephant", 15, 10, 200);
var elephant2  = new Elephant("Smok", "Elephant", 10, 6, 100);

var lion1 = new Lion("Simba", "Lion", 11, 5 ,400);
var lion2 = new Lion("Groot", "Lion", 12, 5 ,500);

var tiger1 = new Tiger("Rocket", "Tiger", 15, 5 ,200);
var tiger2 = new Tiger("Bilbo", "Tiger", 60, 5 ,350);

var rabit1 = new Rabbit("Frodo", "Rabbit", 20, 4, 10);
var rabit2 = new Rabbit("Freek", "Rabbit", 30, 5, 140);

var gorinich = new Gorinich("Gorinich", "Gorinich", 45, 15, 1000);

animals.push(hedgehog1);
animals.push(hedgehog2);
animals.push(elephant1);
animals.push(elephant2);

animals.push(lion1);
animals.push(lion2);
animals.push(tiger1);
animals.push(tiger2);
animals.push(rabit1);
animals.push(rabit2);
animals.push(gorinich);

types.push("Tiger");
types.push("Elephant");
types.push("Hedgehog");
types.push("Lion");
types.push("Rabbit");
types.push("Zebra");

this.getAllTypes = function getAllTypes() {
  return types;
}
this.getAnimals = function getAnimals() {
  return animals;
}

}
