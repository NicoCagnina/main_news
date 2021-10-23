function showModal(titleHtml, contentHtml, buttons) {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="inner-modal">
            <div class="upper-modal">
                <div class="modal-title">${titleHtml}</div>
                <button class="modal-close" type="button">
                    <span class="material-icons">close</span>
                </button>
            </div>
            <div class="modal-content">${contentHtml}</div>
            <div class="lower-modal"></div>
        </div>
    `;

  for (const button of buttons) {
    const element = document.createElement("button");

    element.setAttribute("type", "button");
    element.classList.add("modal__button");
    element.textContent = button.label;
    element.addEventListener("click", () => {
      if (button.triggerClose) {
        document.body.removeChild(modal);
      }

      button.onClick(modal);
    });

    modal.querySelector(".lower-modal").appendChild(element);
  }

  modal.querySelector(".modal-close").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
}

function showConfirmationModal(userData){
    showModal("Subscription succesfully sended!", 
    ` 
    Your name 👤: ${userData.name} 
 
    Your email 📧: ${userData.email} 

    Your password 🔒: ${userData.password} 
 
    Your age 📆: ${userData.age} 

    Your phone 📞: ${userData.phoneNumber} 
    
    Your address 📝: ${userData.address} 

    Your city 🌍: ${userData.city} 

    Your postal code 📬: ${userData.postalCode} 

    Your id 📟: ${userData.idNumber} 
    
    `, [
  {
  label: "Great!",
  onClick: (modal) => {
  },
  triggerClose: true
  }
  ]);
}

function showErrorModal(){
  showModal("Something went wrong!", 
  ` 
  Please check your personal information.
  `, [
{
label: "Ok",
onClick: (modal) => {
},
triggerClose: true
}
]);
}

