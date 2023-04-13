let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberinput");

// numberInput.addEventListener("input", getFactAjax);
numberInput.addEventListener("input", getFetchAPI);

// Using AJAX METHOD
// function getFactAjax() {
//   let number = numberInput.value;
//   console.log(number);

//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://numbersapi.com/${number}`);

//   xhr.onload = function () {
//     if (xhr.status == 200 && number !== null) {
//       fact.style.display = "block";
//       factText.innerHTML = xhr.responseText;
//     }
//   };

//   xhr.send();
// }

// Using FetchAPI
function getFetchAPI() {
  let number = numberInput.value;
  fetch(`http://numbersapi.com/${number}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (response) {
      if (number != "") {
        fact.style.display = "block";
        factText.innerHTML = response;
      }
    });
}
