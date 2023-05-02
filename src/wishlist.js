import Car from "./car.js";

export default class WishList {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const car = new Car(++this.nextId, make, model, year);
    this.list.push(car);
  }
  remove(id) {
    this.list = this.list.filter((car) => id != car.id);
  }
}
