const formElements = {
  name: document.getElementById("name"),
  message: document.getElementById("message"),
  phoneNumber: document.getElementById("phoneNumber"),
  email: document.getElementById("email"),
  sendButton: document.querySelector(".show"),
};

const errorMessages = {
  name: "Name is required",
  message: "Message must have at least 5 characters",
  phoneNumber: "Phone number must start with +380",
  email: "Invalid email format",
};

const showError = (element, message) => {
  let errorElement = element.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains("error")) {
    errorElement = document.createElement("div");
    errorElement.classList.add("error");
    element.parentNode.insertBefore(errorElement, element.nextSibling);
  }
  errorElement.textContent = message;
};

const clearError = (element) => {
  const errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error")) {
    errorElement.remove();
  }
};

const validateField = (field, value) => {
  switch (field) {
    case "name":
      return value.trim() !== "";
    case "message":
      return value.trim().length >= 5;
    case "phoneNumber":
      return /^\+380\d{9}$/.test(value.trim());
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    default:
      return true;
  }
};

formElements.sendButton.addEventListener("click", () => {
  let isValid = true;
  const userData = {};

  Object.keys(formElements).forEach((key) => {
    if (key === "sendButton") return;

    const element = formElements[key];
    const value = element.value.trim();
    const isFieldValid = validateField(key, value);

    if (!isFieldValid) {
      isValid = false;
      showError(element, errorMessages[key]);
    } else {
      clearError(element);
      userData[key] = value;
    }
  });

  if (isValid) {
    console.log(userData);
    alert("Message sent successfully!");
  }
});
