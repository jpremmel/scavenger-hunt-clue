import { Fish, Chicken } from '../src/animal-game.js';

describe ('Hungry Fish', function() {
  let fish = new Fish();

  beforeEach(function() {
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
  let chicken = new Chicken();

  beforeEach(function() {
    jasmine.clock().install();
    chicken.setHunger();
    chicken.setEggs();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a hunger and egg level of 0 when it is created', function() {
    expect(chicken.hunger).toEqual(0);
    expect(chicken.eggs).toEqual(0);
  });

  it('should have a hunger level of 1 after 2 seconds and an egg level of 2 after 2 seconds', function() {
    jasmine.clock().tick(2001);
    expect(chicken.hunger).toEqual(1);
    expect(chicken.eggs).toEqual(2);
  });
});
