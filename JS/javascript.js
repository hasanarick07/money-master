const incomeInput= document.getElementById('incomeInput');
const foodExpenseInput= document.getElementById('foodExpenseInput');
const rentExpenseInput= document.getElementById('rentExpenseInput');
const clothExpenseInput= document.getElementById('clothExpenseInput');
const totalExpanse = document.getElementById('totalExpanse');
const balance = document.getElementById('balance');
const errorCalculationMassage = document.getElementById('errorCalculationMassage')
const errorMassage = document.getElementById('errorMassage');
const savingPercentage = document.getElementById('savingPercentage');
const savingAmount = document.getElementById('savingAmount');
const remainingBalance = document.getElementById('remainingBalance');
const errorSavingMassage = document.getElementById('errorSavingMassage');


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
    if(incomeInput.value=="" || foodExpenseInput.value=="" || rentExpenseInput.value=="" || clothExpenseInput.value=="" || incomeInput.value<0 || foodExpenseInput.value<0 || rentExpenseInput.value<0 || clothExpenseInput.value<0){
        errorCalculationMassage.style.display= 'block';
    }
    else{
        const gotTotalExpanse = addExpense(foodExpenseInputValue, rentExpenseInputValue, clothExpenseInputValue);
        totalExpanse.innerText=gotTotalExpanse;
        balance.innerText= incomeInputValue-gotTotalExpanse;
        errorCalculationMassage.style.display= 'none';
    }
    
    if(incomeInputValue<totalExpanse.innerText){
        errorMassage.style.display = 'block';
    }
    else if (incomeInputValue>totalExpanse.innerText){
        errorMassage.style.display = 'none';
    }
    else{
        errorMassage.style.display = 'none';
    }
    
})

document.getElementById('saveButton').addEventListener('click',function(){
    const savingPercentageValue = parseFloat(savingPercentage.value);
    const incomeInputValue = incomeValueInput();
    if(savingPercentage.value==""||savingPercentage.value<0){
        errorCalculationMassage.style.display= 'block';
    }
    else{
        const savingAmountValue = savingAmountCalculation(incomeInputValue, savingPercentageValue);
        savingAmount.innerText = savingAmountValue;
        const remainingBalanceValue = parseFloat(balance.innerText)- parseFloat(savingAmount.innerText);
        remainingBalance.innerText=remainingBalanceValue;
        errorCalculationMassage.style.display= 'none';
    }
    if(savingAmount.innerText>balance.innerText){
        errorSavingMassage.style.display='block';
    }
    else if(savingAmount.innerText<balance.innerText){
        errorSavingMassage.style.display='none';
    }
    else{
        errorSavingMassage.style.display='none';
    }
})