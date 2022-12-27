const flyoForm = document.querySelector('form');
const formInput = document.querySelector('form input');
const errorMsg = document.querySelector('.error-msg')


let inputValue = formInput.value;
flyoForm.addEventListener('submit', e =>{
    e.preventDefault();
    if(inputValue == ''){
        errorMsg.innerHTML = 'Fill in input field';
    }
    else{
        errorMsg.innerHTML = 'Invalid email'
    }
})