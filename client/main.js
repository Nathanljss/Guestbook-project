const form = document.getElementById("form");

let chat = document.getElementById("Chat");

function addName() {
  const uname = document.getElementById("uname").value;
  const entry = document.createElement("li");
  entry.appendChild(document.createTextNode(uname));
  chat.appendChild(entry);
}

fetchMessages();
async function fetchMessages() {
  const result = await fetch("http://localhost:8080/messages");
  const messages = await result.json();
  //chat(messages);
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});
