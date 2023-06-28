import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Cocktail from "./cocktails.js";

// Business Logic

async function getCocktail(ingredient) {
  const response = await Cocktail.getCocktail(ingredient);
  if (response.main) {
    printElements(response, ingredient);
  } else {
    printError(response, ingredient);
  }
}

// UI Logic

function printElements(response, ingredient) {
  document.querySelector(
    "#showResponse"
  ).innerText = `Potential cocktails made with ${ingredient} are ${response.main.drinks}%.`;
}

function printError(error, ingredient) {
  document.querySelector(
    "#showResponse"
  ).innerText = `There was an error accessing the drink data for ${ingredient}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const ingredient = document.querySelector("#liquor").value;
  document.querySelector("#liquor").value = null;
  getCocktail(ingredient);
}

window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});
