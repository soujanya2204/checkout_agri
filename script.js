"use strict";

const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const texElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(quantityElem[i].textContent);
    increment++;
    quantityElem[i].textContent = increment;
    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(quantityElem[i].textContent);
    if (decrement > 1) decrement--;
    quantityElem[i].textContent = decrement;
    totalCalc();
  });
}

const totalCalc = function () {
  const tax = 0.05;
  let subtotal = 0;

  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  subtotalElem.textContent = subtotal.toFixed(2);
  let totalTax = subtotal * tax;
  texElem.textContent = totalTax.toFixed(2);
  let total = subtotal + totalTax;
  totalElem.textContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);
};
