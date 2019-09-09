import { Fish } from '../src/animal-game.js';

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

  it('should have a hunger level of 1 after 2001 milliseconds', function() {
    jasmine.clock().tick(2001);
    expect(fish.hunger).toEqual(1);
  });
});
