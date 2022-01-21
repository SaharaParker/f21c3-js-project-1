// the form itself:
const loginForm = document.querySelector('form');
const showError = document.querySelector('#show-error');

// inputs on the form:
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Event Listeners
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (
        checkIsNotEmpty(emailInput, "Email cannot be empty") &&
        checkIsNotEmpty(passwordInput, "Password cannot be empty")
    ) {

        window.location.href = '/dashboard.html';
    }

});

// functions
function checkIsNotEmpty(domInput, errorMessage) {
    showError.innerHTML = ""
    if (domInput.value === "") {
        // show an error
        // console.log(errorMessage);

        // create and append to the "show-error" div in the HTML
        //   ....on the fly
        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-red-400 text-white p-2"> ${errorMessage}</p>`;

        showError.appendChild(div);

        return false;
    }
    return true;
}