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
