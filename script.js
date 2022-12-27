const flyoForm = document.querySelector('form');
const formInput = document.querySelector('form input');
const errorMsg = document.querySelector('.error-msg')


function checkInput(value){
    const all = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return all.test(value);
}

flyoForm.addEventListener('submit', e =>{
    if(formInput.value === ''){
        e.preventDefault();
        errorMsg.innerHTML = 'Email is required, Please enter your Email!';
    }
    else if(checkInput(formInput.value.trim())){
    }
    else{
        e.preventDefault();
        errorMsg.innerHTML = 'Invalid email, Please input a valid email address';
    }
})