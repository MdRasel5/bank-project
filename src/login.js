

document.getElementById('submit').addEventListener('click', function () {
    const getTheEmail = document.getElementById('email');
    const email = getTheEmail.value;

    const getThePassword = document.getElementById('password');
    const password = getThePassword.value;

    if (email === 'mdrasel01333@gmail.com' && password === '123') {
        window.location.href = "bank.html";
    } else {
        alert('Please provide correct information.')
    }


});













