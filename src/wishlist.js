import Car from "./car";

export default class Wishlist {
  list = [];
  nextId = 0;

  add(make, model, year) {
    //use car class to make a new car and add it to the list
    let car = new Car(this.nextId++, make, model, year); //creating car
    this.list.push(car);
  }
  remove(carId) {
    //find the car and remove it from the wishlist
    let carIndex = this.list.findIndex((car) => (car.id = carId)); // finding the car by comparing the carId passed to the car id contained in the list
    this.list.splice(carIndex, 1); //index is where to start, and 1 is how many to delete
    // this.list = this.list.filter((car) => car.id != carId);
  }
}
