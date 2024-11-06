/* Add your JavaScript to this file */

function subscribe() {
    const email = document.getElementById('email').value;
    const message = document.querySelector('.message');
    if (email) {
        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
        message.textContent = 'Please enter a valid email address.';
    }
}