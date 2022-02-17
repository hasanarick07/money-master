const incomeInput= document.getElementById('incomeInput');
const foodExpenseInput= document.getElementById('foodExpenseInput');
const rentExpenseInput= document.getElementById('rentExpenseInput');
const clothExpenseInput= document.getElementById('clothExpenseInput');
const totalExpanse = document.getElementById('totalExpanse');
const balance = document.getElementById('balance');
const savingPercentage = document.getElementById('savingPercentage');
const savingAmount = document.getElementById('savingAmount');
const remainingBalance = document.getElementById('remainingBalance');


function addExpense(food, rent, cloth) {
    return food+rent+cloth;
}
function savingAmountCalculation(fullAmount, percentAmount) {
    const percentAmountValue = parseFloat(percentAmount/100);
    return fullAmount*percentAmountValue;
}
function incomeValueInput() {
    const incomeValueInput = parseFloat(incomeInput.value);
    return incomeValueInput;
}
document.getElementById('calculateButton').addEventListener('click',function(){
    const incomeInputValue = incomeValueInput();
    const foodExpenseInputValue = parseFloat(foodExpenseInput.value);
    const rentExpenseInputValue = parseFloat(rentExpenseInput.value);
    const clothExpenseInputValue = parseFloat(clothExpenseInput.value);
    const gotTotalExpanse = addExpense(foodExpenseInputValue, rentExpenseInputValue, clothExpenseInputValue);
    totalExpanse.innerText=gotTotalExpanse;
    balance.innerText= incomeInputValue-gotTotalExpanse;
})

document.getElementById('saveButton').addEventListener('click',function(){
    const savingPercentageValue = parseFloat(savingPercentage.value);
    const incomeInputValue = incomeValueInput();
    const savingAmountValue = savingAmountCalculation(incomeInputValue, savingPercentageValue);
    savingAmount.innerText = savingAmountValue;
    const remainingBalanceValue = parseFloat(balance.innerText)- parseFloat(savingAmount.innerText);
    remainingBalance.innerText=remainingBalanceValue;
})