const formElement = document.getElementById("searchForm");
const inputElement = document.getElementById("searchInput");
const buttonElement = document.getElementById("searchSubmit");
const errorElement = document.getElementById("errorMsg");
const companyInfoElement = document.getElementById("company");
const reposContainerElement = document.getElementById("repos");
const modalContainerElement = document.getElementById("modalContainer");

export const Elements = {
  formElement: formElement,
  inputElement: inputElement,
  buttonElement: buttonElement,
  errorElement: errorElement,
  companyInfoElement: companyInfoElement,
  reposContainerElement: reposContainerElement,
  modalContainerElement: modalContainerElement,
};

export const apiUrl = "https://api.github.com/orgs/";
