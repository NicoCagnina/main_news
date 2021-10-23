window.onload = function() {
  checkLocalStorageData();
}

function saveOnLocalS(){
  localStorage.setItem('name', nameInput.value)
  localStorage.setItem('email', emailInput.value)
  localStorage.setItem('password', pswInput.value)
  localStorage.setItem('age', ageInput.value)
  localStorage.setItem('phoneNumber', phoneInput.value)
  localStorage.setItem('address', addressInput.value)
  localStorage.setItem('city', cityInput.value)
  localStorage.setItem('postalCode', postalInput.value)
  localStorage.setItem('id', dniInput.value)
}

function checkLocalStorageData(){
  nameInput.value = localStorage.getItem('name');
  emailInput.value = localStorage.getItem('email');
  pswInput.value = localStorage.getItem('password');
  pswConfirmation.value = localStorage.getItem('password');
  ageInput.value = localStorage.getItem('age');
  phoneInput.value = localStorage.getItem('phoneNumber');
  addressInput.value = localStorage.getItem('address');
  cityInput.value = localStorage.getItem('city');
  postalInput.value = localStorage.getItem('postalCode');
  dniInput.value = localStorage.getItem('id');

}