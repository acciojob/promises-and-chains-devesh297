document.getElementById("votingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  const ageValue = document.getElementById("age").value.trim();
  const nameValue = document.getElementById("name").value.trim();

  if (!ageValue || !nameValue) {
    alert("Please enter valid details.");
    return;
  }

  const age = parseInt(ageValue, 10);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${nameValue}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameValue}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
