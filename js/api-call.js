var url = new URL('http://curso-dev-2021.herokuapp.com/newsletter');
var params = url.searchParams;


function createUrl(){
  params.append('name', nameInput.value);
  params.append('email', emailInput.value)
  params.append('password', pswInput.value)
  params.append('age', ageInput.value)
  params.append('phoneNumber', phoneInput.value)
  params.append('address', addressInput.value)
  params.append('city', cityInput.value)
  params.append('postalCode', postalInput.value)
  params.append('idNumber', dniInput.value)

  return url;
}

var sendData = function (){
    fetch(createUrl())
    .then(responseManager)
    .then(dataManager)
    .catch(errorManager);
}

function responseManager(res){
  return res.json();
}

function dataManager(data){
  showConfirmationModal(data);
  saveOnLocalS();
  console.log(data);
}

function errorManager(err){
  showErrorModal(err);
}