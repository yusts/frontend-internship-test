/* Here goes your JS code */
// Onclick button Click Me will show popup;
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  // Onclick button close will close popup
  function closePopup() {
    popup.style.display = "none";
  }
  
  //Adding simple JS validation to form
  document
    .getElementById("login-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = document.loginform.email.value;
      var password = document.loginform.password.value;
      var checkbox = document.getElementById("checkbox-agree");
      var checkEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      var btnMain = document.getElementById("show-popup-form");
      var loading = document.getElementById("main-loading");
      var message = document.getElementById("main-message");
  
      // check if email is valid
      if (!checkEmail.test(email)) {
        alert("Invalid Email Address, please try again");
      } // check if password is valid
      else if (!checkPassword.test(password)) {
        alert("Invalid Password, please try again");
      } // check if Terms and Conditions agreement is checked
      else if (!checkbox.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
      } // after succesfull login configuration for loader, login form and Click Me btn
      else {
        btnMain.style.display = "none";
        loading.style.display = "block";
        // Setting timeout for 3 second to disappear popup after submit login form and then display "Thank you!"
        setTimeout(function() {
          popup.style.display = "none";
          loading.style.display = "none";
          message.style.display = "block";
          return true;
        }, 3000);
      }
    });
  