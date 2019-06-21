"use strict";

let money = prompt("Ваш бюдшет за месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "Credit": "200"
    },
    optionalExpenses: {},
    income: [],
    savings: false

};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется");


appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

// Существует семь типов данных: 
// Числа, string и name (строки)
// boolean (логический тип), true/false,
// null, undefined, symbol.

// Через команду console.log()

// Операторы || и && используются для проверки
// в разных ситуациях