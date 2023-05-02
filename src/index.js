import Wishlist from "./wishlist";

//selecting the dom elements that set the values for car
let thisWishlist = new Wishlist();
const form = document.querySelector("#submitForm");
const inputMake = document.querySelector("#makeInput");
const inputModel = document.querySelector("#modelInput");
const inputYear = document.querySelector("#yearInput");
//selecting the display elements
const displayInputMake = document.querySelector("#car-make");
const displayInputModel = document.querySelector("#car-model");
const displayInputYear = document.querySelector("#car-year");
//selecting the remove button
const removeBtn = document.querySelector(".removeBtn");
//selecting unordered element by selecting parent then child
const ul = document.querySelector("ul");

//creating functiosn
form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);
function showCarDetails(car) {
  //updates the dom with the correct values for the car from the array object passed
  displayInputMake.textContent = car.make;
  displayInputModel.textContent = car.model;
  displayInputYear.textContent = car.year;
  //enable the remove button
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  //will clear ul contents by setting the value to blank
  ul.innerHTML = "";
  //iterating through the list of cars
  thisWishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    // add event listener to showCarDetails per list item click
    li.addEventListener("click", () => showCarDetails(car));
    ul.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();
  thisWishlist.add(inputMake.value, inputModel.value, inputYear.value);
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
  displayInputMake.textContent = "";
  displayInputModel.textContent = "";
  displayInputYear.textContent = "";
  //disable remove button
  removeBtn.disabled = true;
}
