describe("Animals functions", function() {
  var animal = new Animal("name", "type", 10, 20, 30);

it ("test Use Voice", function(){
expect(animal.getVoice()).toBe("Animal voice");
});

it ("get animal name", function(){
  expect(animal.getName()).toBe("name");
});

it ("get animal type", function(){
  expect(animal.getType()).toBe("type");
});

it ("get animal size", function(){
  expect(animal.getSize()).toBe(30);
});

it ("Tick" , function () {
  animal.tick();
  expect (animal.getActivity()/1000).toBe(19);
  expect (animal.getEatTime()/1000).toBe(9);
})

});
