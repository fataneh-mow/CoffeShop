"use strict";

function startOrdering() {
    //part one
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    if ((username === "admin" || username === "user") && password === "1234") {
      var level = (username === "admin") ? "high" : "low";
    } else {
      alert("Access denied!");
      return;
    }
    //part tow
    let name = prompt("What is your name?");
    let age = Number(prompt("How old are you?"));
    let coffee = prompt("What coffee would you like? (espresso, latte, cappuccino)");
    if (!coffee) {
      alert("No coffee type entered.");
      return;
    }

    coffee = coffee.toLowerCase();

    if (coffee !== "espresso" && coffee !== "latte" && coffee !== "cappuccino") {
      alert("Invalid coffee type! Please enter espresso, latte, or cappuccino.");
      return;
    }

    let quantity = Number(prompt("How many cups?"));
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid number of cups.");
      return;
    }

    let pricePerCup;
    switch (coffee) {
        case "espresso":
          pricePerCup = 2.5;
          break;
        case "latte":
          pricePerCup = 3.5;
          break;
        case "cappuccino":
          pricePerCup = 4.0;
          break;
        default:
          alert("Invalid coffee type!");
          return;
      }

    let originalTotal = pricePerCup * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0; //0.10 for true , 0 for false
    let finalTotal = originalTotal - discount;
    
    // part three
    let people = Number(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    if (![1, 2, 3].includes(people)) {
      alert("Invalid number of people. Please enter 1, 2, or 3.");
      return;
    }

    let tipPercent = Number(prompt("Tip percentage? (0, 5, 10, 15)"));
    if (![0, 5, 10, 15].includes(tipPercent)) {
      alert("Invalid tip percentage. Please enter 0, 5, 10, or 15.");
      return;
    }

    let tipFinalAmount = finalTotal * (tipPercent / 100);// must be devided to 100 
    let totalWithTip = finalTotal + tipFinalAmount;
    let splitedBill = totalWithTip / people;
    
    // part four
    //note = true way of writing toFixed in a template literal ⬇
    alert(`Hello ${name}!
           You ordered ${quantity} ${coffee}(s).
           Original total: $${originalTotal.toFixed(2)}
           Discount: $${discount.toFixed(2)}
           Tip: $${tipFinalAmount.toFixed(2)}
           Total with Tip: $${totalWithTip.toFixed(2)}
           Split between ${people} people: $${splitedBill.toFixed(2)} each`);
  }

  document.getElementById("start-btn").addEventListener("click", startOrdering);