
    const form = document.getElementById("registration-form");
    const displayData = document.getElementById("display-data");
    const unenrollBtn = document.getElementById("unenroll-btn");
    const clearBtn = document.getElementById("clear-btn");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value || '';

      const data = {
        name: name,
        email: email,
        password: password,
        gender: gender
      };

      displayData.innerHTML = "<h3>Registration Data:</h3>" +
        "<p><strong>Name:</strong> " + data.name + "</p>" +
        "<p><strong>Email:</strong> " + data.email + "</p>" +
        "<p><strong>Password:</strong> " + data.password + "</p>" +
        "<p><strong>Gender:</strong> " + data.gender + "</p>";

      form.reset();
    });

    unenrollBtn.addEventListener("click", function() {
      displayData.innerHTML = "";
    });

    clearBtn.addEventListener("click", function() {
      form.reset();
      displayData.innerHTML = "";
    });