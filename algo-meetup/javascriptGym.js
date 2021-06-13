// START YOUR CODE HERE

const username = document.querySelector('input[name = "username"]');
const email = document.querySelector('input[name = "email"]');
const message = document.querySelector("h3");
const button = document.querySelector("button");

email.addEventListener("input", emailCheck);
button.addEventListener("click", async () => {
  await addUser(username.value, email.value, append);
});

function emailCheck() {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(email.value)) {
    email.style.backgroundColor = "lightBlue";
    message.innerText = "The email address you have entered is valid";
    message.style.color = "black";
  } else {
    email.style.backgroundColor = "pink";
    message.innerText = "Please enter a valid email address.";
    message.style.color = "red";
  }
}

function append(resp) {
  console.log(resp);
  try {
    let li = document.createElement("li");
    li.innerText = `User: ${resp.user.username}, email: ${resp.user.email}`;
    document.querySelector("ul").appendChild(li);
    message.innerText = "The user was added successfully!";
    message.style.color = "black";
  } catch (error) {
    message.innerText = resp.error;
    message.style.color = "red";
  }
}

// END YOUR CODE HERE

// Do not modify this function. Add user service wrapper.
function addUser(username, email, callback) {
  var xhr = new XMLHttpRequest();
  var response;
  var success = !!Math.round(Math.random());

  if (!success) {
    response = JSON.stringify({
      success: success,
      error: "Oups, something went wrong!",
    });
  } else {
    response = JSON.stringify({
      success: success,
      user: {
        username: username,
        email: email,
      },
    });
  }

  xhr.open("POST", "/echo/json/");
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send("json=" + response);
}
