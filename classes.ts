class Vehicle {
  constructor(protected color: string) {}

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    console.log(this.color);
  }
}

const car = new Car(4, 'blue');

// console.log({ vehicle, car });
console.log({ car });
console.log({ vehicle });
