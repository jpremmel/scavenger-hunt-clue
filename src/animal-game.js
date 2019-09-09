export class Farm {
  constructor () {
    this.fish = new Fish();
    this.animals = [this.fish];
  }

  addChicken() {
    this.chicken = new Chicken();
    this.animals.push(this.chicken);
  }
}


export class Fish {
  constructor () {
    this.hunger = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger++;
    }, 2000);
  }
}

export class Chicken {
  constructor () {
    this.hunger = 0;
    this.eggs = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger++;
    }, 2000);
  }

  setEggs() {
    setInterval(() => {
      this.eggs += 2;
    }, 2000);
  }
}

export class Cow {
  constructor () {
    this.hunger = 0;
    this.milkLevel = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger++;
    }, 2000);
  }

  setMilk() {
    setInterval(() => {
      this.milkLevel += 2;
    }, 1000);
  }
}

export class Dog {
  constructor () {
    this.hunger = 0;
    this.energyLevel = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger += 2;
    }, 1000);
  }

  setEnergy() {
    setInterval(() => {
      this.energyLevel += 2;
    }, 1000);
  }
}

export class Bear {
  constructor () {
    this.hunger = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger += 2;
    }, 500);
  }
}
