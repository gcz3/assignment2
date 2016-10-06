function errorMessage(message) {
  var error = document.createElement("p");
  error.innerHTML = "&#9888 " + message;
  $(error).css("color", "red");
  $(error).css("margin-bottom", "0");
  return error;
}

function successMessage(message) {
  var success = document.createElement("p");
  success.innerHTML = message;
  $(success).css("color", "#429a26");
  $(success).css("font-weight", "bold");
  $(success).css("font-size", "1.5em");
  $(success).css("text-align", "center");
  return success;
}

$(document).ready(function() {
  $("#loginForm").submit(function() {
    var username = $("#uname").val();
    if(username == '') {
      var error = errorMessage("Please enter a username.");
      $("#uname").after(error);
      return false;
    }
    if(/^[a-zA-Z0-9-]*$/.test(username) == false) {
      $("#uname").val('');
      var error = errorMessage("Invalid username.");
      $("#uname").after(error);
      return false;
    }

    var password = $("#passw").val();
    if(password == '') {
      var error = errorMessage("Please enter a password.");
      $("#passw").after(error);
      return false;
    }

    $("#loginForm").remove();
    var success = successMessage("Data has successfully been sent over! (mocked)");
    $("body").append(success);
    return false;
  });

  $("#uname").keyup(function() {
    $("p").remove();
  });

  $("#passw").keyup(function() {
    $("p").remove();
  });
});
