import { Fish, Chicken, Cow } from '../src/animal-game.js';

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
  })
});
