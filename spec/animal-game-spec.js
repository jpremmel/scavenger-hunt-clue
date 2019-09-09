import { Farm, Fish, Chicken, Cow, Dog, Bear } from '../src/animal-game.js';

describe ('Hungry Fish', function() {
  let fish;

  beforeEach(function() {
    fish = new Fish();
    jasmine.clock().install();
    fish.setHunger();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a hunger level of 0 when it is created', function() {
    expect(fish.hunger).toEqual(0);
  });

  it('should have a hunger level of 1 after 2 seconds', function() {
    jasmine.clock().tick(2001);
    expect(fish.hunger).toEqual(1);
  });
});

describe ('Hungry Chicken', function() {
  let chicken;

  beforeEach(function() {
    chicken = new Chicken();
    jasmine.clock().install();
    chicken.setHunger();
    chicken.setEggs();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have hunger and egg levels of 0 when it is created', function() {
    expect(chicken.hunger).toEqual(0);
    expect(chicken.eggs).toEqual(0);
  });

  it('should have a hunger level of 1 after 2 seconds and an egg level of 2 after 2 seconds', function() {
    jasmine.clock().tick(2001);
    expect(chicken.hunger).toEqual(1);
    expect(chicken.eggs).toEqual(2);
  });
});

describe ('Hungry Cow', function() {
  let cow;

  beforeEach(function() {
    cow = new Cow();
    jasmine.clock().install();
    cow.setHunger();
    cow.setMilk();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have hunger and milk levels of 0 when it is created', function() {
    expect(cow.hunger).toEqual(0);
    expect(cow.milkLevel).toEqual(0);
  });

  it('should have a hunger level of 1 after 2 seconds and a milk level of 4 after 2 seconds', function() {
    jasmine.clock().tick(2001);
    expect(cow.hunger).toEqual(1);
    expect(cow.milkLevel).toEqual(4);
  });
});

describe ('Hungry Dog', function() {
  let dog;

  beforeEach(function() {
    dog = new Dog();
    jasmine.clock().install();
    dog.setHunger();
    dog.setEnergy();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have hunger and energy levels of 0 when it is created', function() {
    expect(dog.hunger).toEqual(0);
    expect(dog.energyLevel).toEqual(0);
  });

  it('should have hunger and energy levels of 2 after 1 second', function() {
    jasmine.clock().tick(1001);
    expect(dog.hunger).toEqual(2);
    expect(dog.energyLevel).toEqual(2);
  });
});

describe ('Hungry Bear', function() {
  let bear;

  beforeEach(function() {
    bear = new Bear();
    jasmine.clock().install();
    bear.setHunger();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a hunger level of 0 when it is created', function() {
    expect(bear.hunger).toEqual(0);
  });

  it('should have a hunger level of 4 after 1 second', function() {
    jasmine.clock().tick(1001);
    expect(bear.hunger).toEqual(4);
  });
});

describe('Farm', function() {
  let farm = new Farm();

  it('should have a fish property and an animals array (containing only the fish) upon creation', function() {
    expect(farm.fish.hunger).toEqual(0);
    expect(farm.animals.length).toEqual(1);
  });

  it('should have a method to add a chicken to the farm', function() {
    farm.addChicken();
    expect(farm.chicken.hunger).toEqual(0);
    expect(farm.animals.length).toEqual(2);
  });

  it('should have a method to add a cow to the farm', function() {
    farm.addCow();
    expect(farm.cow.hunger).toEqual(0);
    expect(farm.animals.length).toEqual(3);
  });

  it('should have a method to add a dog to the farm', function() {
    farm.addDog();
    expect(farm.dog.hunger).toEqual(0);
    expect(farm.animals.length).toEqual(4);
  });

  it('should have a method to add a bear to the farm', function() {
    farm.addBear();
    expect(farm.bear.hunger).toEqual(0);
    expect(farm.animals.length).toEqual(5);
  });
});
