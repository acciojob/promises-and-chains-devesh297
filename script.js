document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ageInput = document.getElementById("age").value.trim();
  const nameInput = document.getElementById("name").value.trim();

  if (ageInput === "" || nameInput === "") {
    alert("Please enter valid details.");
    return;
  }

  const age = parseInt(ageInput, 10);
  const name = nameInput;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
