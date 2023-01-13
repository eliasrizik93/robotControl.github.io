$(document).ready(function () {
  function sendPost() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqbin.com/echo/post/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    };

    let data = `{
            "Id": 78912,
            "Customer": "Jason Sweet",
            "Quantity": 1,
            "Price": 18.00
          }`;

    xhr.send(data);
  }

  var forward = document.getElementById("moveForward");
  var right = document.getElementById("moveRight");
  var left = document.getElementById("moveLeft");
  var backward = document.getElementById("moveBackward");

  if (forward) {
    forward.addEventListener("click", function () {
      sendPost();
    });
  }
  if (right) {
    right.addEventListener("click", function () {
      sendPost();
    });
  }
  if (left) {
    left.addEventListener("click", function () {
      sendPost();
    });
  }
  if (backward) {
    backward.addEventListener("click", function () {
      sendPost();
    });
  }
});
