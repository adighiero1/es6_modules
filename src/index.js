import Wishlist from "./wishlist";

console.log("Hello World");
//selecting the dom elements that set the values for car
let thisWishlist = new Wishlist();
let form = document.querySelector("#submitform");
let inputMake = document.querySelector("#makeInput");
let inputModel = document.querySelector("#modelInput");
let inputYear = document.querySelector("#yearInput");
//selecting the display elements
let displayInputMake = document.querySelector("#car-make");
let displayInputModel = document.querySelector("#car-model");
let displayInputYear = document.querySelector("#car-year");
//selecting the remove button
let removeBtn = document.querySelector("#removeBTN");
//selecting unordered element by selecting parent then child
let ul = document.querySelector("#wishListContainer > ul");

//creating functiosn
form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);
function showCarDetails(car) {
  //updates the dom with the correct values for the car from the array object passed
  displayInputMake = car.make;
  displayInputModel = car.model;
  displayInputYear = car.year;
  //enable the remove button
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  //will clear ul contents by setting the value to blank
  ul.innerHTML = "";
  //iterating through the list of cars
  thisWishlist.forEach((car) => {
    let li = document.createElement("li");
    li.textContent = car.model;
    // add event listener to showCarDetails per list item click
    li.addEventListener("click", () => showCarDetails(car));
    ul.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();
  let make = inputMake.value;
  let model = inputModel.value;
  let year = inputYear.value;
  thisWishlist.add(make, model, year);
  updateDOMList();
  //reseting form values
  inputMake.value = "";
  inputModel.value = "";
  inputYear.value = "";
}

function removeCar() {
  //getting the displayed car's id
  let carId = Number(removeBtn.getAttribute("data-carId"));
  //removing the car that was selected
  thisWishlist.remove(carId);
  //updating the DOM list
  updateDOMList();
  //reseting display values
  displayInputMake.value = "";
  displayInputModel.value = "";
  displayInputYear.value = "";
  //disable remove button
  removeBtn.disabled = true;
}
