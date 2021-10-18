var nameInput = document.querySelector('#name-text');
var emailInput = document.querySelector('#email-text');
var pswInput = document.querySelector('#psw-text');
var pswConfirmation = document.querySelector('#psw-confirmation-text');
var ageInput = document.querySelector('#age-text');
var phoneInput = document.querySelector('#phone-text');
var addressInput = document.querySelector('#address-text');
var cityInput = document.querySelector('#city-text');
var postalInput = document.querySelector('#postal-text');
var dniInput = document.querySelector('#dni-text');
var submitBtn = document.querySelector('#submit-btn');

var welcomeMsg = document.querySelector('.welcome-message');
var nameMsg = document.querySelector('.error-msg-name');
var emailMsg = document.querySelector('.error-msg-email');
var pswMsg = document.querySelector('.error-msg-psw');
var ageMsg = document.querySelector('.error-msg-age');
var phoneMsg = document.querySelector('.error-msg-phone');
var addressMsg = document.querySelector('.error-msg-address');
var cityMsg = document.querySelector('.error-msg-city');
var postalMsg = document.querySelector('.error-msg-postal');
var dniMsg = document.querySelector('.error-msg-dni');


submitBtn.addEventListener("click", validateInputs);

// Name input 

nameInput.addEventListener("blur", function(){
  if(!validateName()){
    nameMsg.textContent = 'Name must have at least 2 separated words.';
    nameMsg.classList.remove('validated');
  } else{
    nameMsg.classList.add('validated');
  }
})

nameInput.addEventListener("focus", function(){
  nameMsg.classList.add('validated');
})


// BONUS
nameInput.addEventListener("keyup", function(){
  welcomeMsg.textContent = 'Welcome ' + document.querySelector('#name-text').value;
})

// Email input 

emailInput.addEventListener("blur", function(){
  if(!validateEmail()){
    emailMsg.textContent = 'Not a valid format.';
    emailMsg.classList.remove('validated');
  } else{
    emailMsg.classList.add('validated');
  }
})

emailInput.addEventListener("focus", function(){
  emailMsg.classList.add('validated');
})

// Psw input 

pswConfirmation.addEventListener("blur", function(){
  if(!validatePsw()){
    pswMsg.textContent = "Passwords must match and have at least eight characters and one number.";
    pswMsg.classList.remove('validated');
  } else{
    pswMsg.classList.add('validated');
  }
})

pswConfirmation.addEventListener("focus", function(){
  pswMsg.classList.add('validated');
})

// Age input 

ageInput.addEventListener("blur", function(){
  if(!validateAge()){
    ageMsg.textContent = "Minimun age: 18.";
    ageMsg.classList.remove('validated');
  } else{
    ageMsg.classList.add('validated');
  }
})

ageInput.addEventListener("focus", function(){
  ageMsg.classList.add('validated');
})

// Phone input 

phoneInput.addEventListener("blur", function(){
  if(!validatePhone()){
    phoneMsg.textContent = "At least 7 digits with no spaces and no dashes.";
    phoneMsg.classList.remove('validated');
  } else{
    phoneMsg.classList.add('validated');
  }
})

phoneInput.addEventListener("focus", function(){
  phoneMsg.classList.add('validated');
})

// Address input 

addressInput.addEventListener("blur", function(){
  if(!validateAddress()){
    addressMsg.textContent = "At least 5 digits with a space.";
    addressMsg.classList.remove('validated');
  } else{
    addressMsg.classList.add('validated');
  }
})

addressInput.addEventListener("focus", function(){
  addressMsg.classList.add('validated');
})

// City input 

cityInput.addEventListener("blur", function(){
  if(!validateCity()){
    cityMsg.textContent = "At least 3 digits.";
    cityMsg.classList.remove('validated');
  } else{
    cityMsg.classList.add('validated');
  }
})

cityInput.addEventListener("focus", function(){
  cityMsg.classList.add('validated');
})

// Postal Code input 

dniInput.addEventListener("blur", function(){
  if(!validateDni()){
    dniMsg.textContent = "7-8 numeric digits.";
    dniMsg.classList.remove('validated');
  } else{
    dniMsg.classList.add('validated');
  }
})

dniInput.addEventListener("focus", function(){
  dniMsg.classList.add('validated');
})
