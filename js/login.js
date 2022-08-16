//step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2:get the email address inside the email input field
    //use .value to get text from input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //verify email and password
    if (email === 'love@raizel.com' && password === 'crush') {
        window.location.href = 'bank.html';
    }
    else {
        alert('dont deserve to love raizel');
    }
})