#! /usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
  PKR: 1, // base currency
  USD: 0.0036,
  AFN: 0.26,
  EUR: 0.0034,
  BHD: 0.0014,
  KWD: 0.0011,
  RUB: 0.34,
  SAR: 0.014,
  UZS: 45.56,
};
let user_selection = await inquirer.prompt([
  {
    name: "fromcurrency",
    type: "list",
    choices: ["PKR", "USD", "AFN", "EUR", "BHD", "KWD", "RUB", "SAR", "UZS"],
    message: "Select from currency",
  },
  {
    name: "tocurrency",
    type: "list",
    choices: ["PKR", "USD", "AFN", "EUR", "BHD", "KWD", "RUB", "SAR", "UZS"],
    message: "Select to currency",
  },
  {
    name: "amount",
    type: "number",
    message: "Enter amount",
  },
]);

let from_currency_amount = currency[user_selection.fromcurrency];
let to_currency_amount = currency[user_selection.tocurrency];
let amount = user_selection.amount;
let base_amount = amount / from_currency_amount;
let converted_amount = base_amount * to_currency_amount;
console.log(converted_amount);
