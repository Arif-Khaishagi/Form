function formValidation() {
  var fname = document.registration.fname;
  var lname = document.registration.lname;
  var dob = document.registration.dob;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var umob = document.registration.mobile;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  var uosex = document.registration.uosex;
  if (allLetter(fname)) {
    if (allLetter(lname)) {
      if (allnumeric(dob)) {
        if (alphanumeric(uadd)) {
          if (countryselect(ucountry)) {
              if (ValidateEmail(uemail)) {
                if(allnumeric(umob)){
                if (validsex(umsex, ufsex, uosex)) {
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function allLetter(fname) {
  var letters = /^[A-Za-z]+$/;
  if (fname.value.match(letters)) {
    return true;
  } else {
    alert("Name must have alphabet characters only");
    fname.focus();
    return false;
  }
}
function allLetter(lname) {
  var letters = /^[A-Za-z]+$/;
  if (lname.value.match(letters)) {
    return true;
  } else {
    alert("Name must have alphabet characters only");
    lname.focus();
    return false;
  }
}
function allnumeric(dob) {
    var Date = /^[0-9]+$/;
    if (dob.value.match(Date)) {
      return true;
    } else {
      alert("DOB code must have numeric characters only");
      dob.focus();
      return false;
    }
  }
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function allnumeric(umob) {
    var numbers = /^[0-9]+$/;
    if (umob.value.match(numbers)) {
      return true;
    } else {
      alert("Mobile no. must have numeric characters only");
      umob.focus();
      return false;
    }
  }

function validsex(umsex, ufsex, uosex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (uosex.checked) {
    x++;
  }
  if (x == 0) {
    alert("Select Male/Female/Other");
    umsex.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
