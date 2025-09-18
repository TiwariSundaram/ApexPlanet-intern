// ====== Step 2: Form Validation ======
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  // Reset error messages
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.style.display = "none"));

  if (!name.value.trim()) {
    showError(name, "Name is required");
    valid = false;
  }

  if (!email.value.trim()) {
    showError(email, "Email is required");
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (!message.value.trim()) {
    showError(message, "Message is required");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(inputElement, message) {
  const error = inputElement.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
}

// To-Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", () => taskList.removeChild(li));

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
