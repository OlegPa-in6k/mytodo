describe("Zoo Service functions", function() {
  var animals = new Zoo();

  var startLenght = animals.getAnimals().length;
var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 2, 1, 100);

it ("test Add animal", function(){
  animals.addAnimal(hedgehog1);
  expect(animals.getAnimals().length).toBe(startLenght + 1);
});

// it("test RemoveAnimal", function(){
//
//     animals.removeAnimal(hedgehog1);
//     expect(animals.getAnimals().length).toBe(startLenght -1 );
// })



});
