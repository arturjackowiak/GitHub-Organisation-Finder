import { handleSearch } from "./handleSearch.js";
import { closeModal } from "./displayModal.js";
import { Elements } from "./consts.js";

Elements.formElement.addEventListener("submit", handleSearch);
Elements.modalContainerElement.addEventListener("click", closeModal);
