"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    
    if (isNaN(percent) && isNaN(parseInt(percent))) {
        return  `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution) && isNaN(parseInt(contribution))) {
        return  `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (isNaN(amount) && isNaN(parseInt(amount))) {
        return  `Параметр "Общая стоимость" содержит неправильное значение ${amount}`; 
    };

    percent = parseInt(percent);
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    let p = percent / 12 / 100;
    let s =  amount - contribution;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12 - date.getMonth() + new Date().getMonth();
    let monthlyFee = s * (p + p /((Math.pow((1 + p), n) - 1)));
    let totalAmount = n * monthlyFee;

    return totalAmount.toFixed(2);
    
}

function getGreeting(name) {  
if (name === "") {
    return  "Привет, мир! Меня зовут Аноним."
   }  
   return `Привет, мир! Меня зовут ${name}.`;
   
}