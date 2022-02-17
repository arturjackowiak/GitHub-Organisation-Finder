const formElement = document.getElementById("searchForm");
const inputElement = document.getElementById("searchInput");
const buttonElement = document.getElementById("searchSubmit");
const dataContainerElement = document.getElementById("dataContainer");
const errorElement = document.getElementById("errorMsg");

export const Elements = {
  formElement: formElement,
  inputElement: inputElement,
  buttonElement: buttonElement,
  dataContainerElement: dataContainerElement,
  errorElement: errorElement,
};

export const apiUrl = "https://api.github.com/orgs/";
