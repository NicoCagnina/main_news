function validateInputs(){
  var personalInformation =
  `
  Name: ${nameInput.value}
  Email: ${emailInput.value}
  Password: ${pswInput.value}
  Age: ${ageInput.value}
  Phone number: ${phoneInput.value}
  Address: ${addressInput.value}
  City: ${cityInput.value}
  Postal code: ${postalInput.value}
  Dni: ${dniInput.value}
  `;
  if(validateName() &&
     validateEmail() && 
     validatePsw() && 
     validateAge() &&
     validatePhone() &&
     validateAddress() &&
     validateCity() &&
     validatePostal() &&
     validateDni()){    
    sendData();
  } else{
    alert(`There was an error. Please check your information: ${personalInformation}`);
  }
}

var validateName = function () {
  nameInput = document.querySelector('#name-text');
  var nameRegex = /^[a-zA-Z]+[ ]+[a-zA-Z\s]+$/;
  return(nameInput.value.match(nameRegex));
}

var validateEmail = function (){
  emailInput = document.querySelector('#email-text');
  var emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return(emailInput.value.match(emailRegex));
}

var validatePsw = function(){
  pswInput = document.querySelector('#psw-text');
  pswConfirmation = document.querySelector('#psw-confirmation-text');
  return(pswInput.value.length >= 8 && pswInput.value === pswConfirmation.value &&  /\d/.test(pswInput.value));
}

var validateAge = function(){
  ageInput = document.querySelector('#age-text');
  var ageRegex = /^-?\d\d*$/;
  return(ageInput.value.match(ageRegex) && ageInput.value >= 18);
}

var validatePhone = function(){
  phoneInput = document.querySelector('#phone-text');
  var phoneRegex = /^-?\d\d*$/;
  return(phoneInput.value.match(phoneRegex) && phoneInput.value.length >= 7);
}

var validateAddress = function () {
  addressInput = document.querySelector('#address-text');
  var addressRegex = /^[a-zA-Z0-9]+[ ]+[a-zA-Z0-9\s]+$/;
  return(addressInput.value.match(addressRegex));
}

var validateCity = function () {
  cityInput = document.querySelector('#city-text');
  return(cityInput.value.length >= 3);
}

var validatePostal = function () {
  postalInput = document.querySelector('#postal-text');
  return(postalInput.value.length >= 3);
}

var validateDni = function () {
  dniInput = document.querySelector('#dni-text');
  var ageRegex = /^-?\d\d*$/;
  return(dniInput.value.match(ageRegex) && dniInput.value.length >= 7 && dniInput.value.length <= 8);
}

