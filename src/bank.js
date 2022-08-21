document.getElementById('dipusit-btn').addEventListener('click', function () {

    const getPrevoiusDipusit = document.getElementById('add-dipusit');
    const PrevoiusDipusitString = getPrevoiusDipusit.innerText;
    const PrevoiusDipusit = parseFloat(PrevoiusDipusitString);

    const getNewDipusit = document.getElementById('dipusit-amount');
    const newDipusitString = getNewDipusit.value;
    const newDipusit = parseFloat(newDipusitString);

    getNewDipusit.value = '';

    if (isNaN(newDipusit)) {
        alert('Please provide Number only.');
        return;
    }

    const currentDipust = PrevoiusDipusit + newDipusit;

    getPrevoiusDipusit.innerText = currentDipust;



    // Current Balance Js
    const getThePreviousBalance = document.getElementById('previous-balance');
    const previousBalanceString = getThePreviousBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance + newDipusit;

    getThePreviousBalance.innerText = currentBalance;

});

