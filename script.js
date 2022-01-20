function validate(event) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (event.value.match(emailRegex)) {
        return true;
    } else {
        event.classList.add('error');
        event.nextElementSibling.nextElementSibling.innerHTML = 'Please provide a valid email address';
        event.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}