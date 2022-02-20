import { Elements } from "./consts.js";

export const displayModal = ({
  html_url,
  clone_url,
  ssh_url,
  stargazers_count,
  size,
  description,
}) => {
  console.log(stargazers_count);
  closeModal();
  const modalElement = document.createElement("div");
  modalElement.classList.add("data-wrapper");
  modalElement.addEventListener("click", () => closeModal);
  modalElement.innerHTML = `
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Project URL:</span>
    <a class="link" href=${html_url}>${html_url ? html_url : "no data"}</a>
    </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Clone URL:</span>
    <a class="link" href=${clone_url}>${clone_url ? clone_url : "no data"}</a>
    </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Clone SSH:</span>
    <a class="link" href=${ssh_url}>${ssh_url ? ssh_url : "no data"}</a>
    </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Stars:</span>
    <span class="data-wrapper__paragraph">${
      stargazers_count ? stargazers_count : "no data"
    }</span>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Size:</span>
    <span class="data-wrapper__paragraph">${size ? size : "no data"}</span>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Description:</span>
    <p>${description}</p>
  </div>
  <div class="data-wrapper__info-block">
    <button class="button" onclick="${() => closeModal()}">Close</button>
  </div>
  `;
  Elements.modalContainerElement.appendChild(modalElement);
  Elements.modalContainerElement.classList.remove("hidden");
};

export const closeModal = () => {
  Elements.modalContainerElement.innerHTML = "";
  Elements.modalContainerElement.classList.add("hidden");
};
