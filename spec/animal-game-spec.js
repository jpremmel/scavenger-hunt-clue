import { Fish } from '../src/animal-game.js';

describe ('Hungry Fish', function() {
  let fish = new Fish();

  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a hunger level of 0 when it is created', function() {
    expect(fish.hunger).toEqual(0);
  });
});
