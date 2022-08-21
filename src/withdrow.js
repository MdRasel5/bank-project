




document.getElementById('withdrow-btn').addEventListener('click', function () {
    const getWithdrowField = document.getElementById('withdrow-field');
    const withdrowAmountString = getWithdrowField.value;
    const newWithdrowAmount = parseFloat(withdrowAmountString);

    const getWithdrowAmout = document.getElementById('withdrow-amount');
    const previousWithdrowAmountString = getWithdrowAmout.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowAmountString);



    const getPreviousBalance = document.getElementById('previous-balance');
    const previousBalanceString = getPreviousBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    getWithdrowField.value = '';

    if (isNaN(newWithdrowAmount)) {
        alert('Please provide Number only.');
        return;
    }

    if (newWithdrowAmount > previousBalance) {
        alert('You dont have enough amount ');
        return;
    }

    const totalWithdrow = previousWithdrowAmount + newWithdrowAmount;
    getWithdrowAmout.innerText = totalWithdrow;

    const totalBalance = previousBalance - newWithdrowAmount;
    getPreviousBalance.innerText = totalBalance;





});










