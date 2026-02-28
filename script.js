const btn = document.body.querySelector("button");

function showAlert() {
  btn.addEventListener("click", function () {
    alert("button Clicked");
  });
}

showAlert();
