console.log("hello");


document.getElementById('calculateButton').addEventListener('click',function(){
    const incomeInput= document.getElementById('incomeInput').value;
    const foodExpenseInput= document.getElementById('foodExpenseInput').value;
    const rentExpenseInput= document.getElementById('rentExpenseInput').value;
    const clothExpenseInput= document.getElementById('clothExpenseInput').value;
    const totalExpanse = document.getElementById('totalExpanse');
    const balance = document.getElementById('balance');
    totalExpanse.innerText= Number(foodExpenseInput)+Number(rentExpenseInput)+Number(clothExpenseInput);
    balance.innerText= Number(incomeInput)-Number(totalExpanse);

    console.log(totalExpanse);
})