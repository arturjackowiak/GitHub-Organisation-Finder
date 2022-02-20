import { Elements } from "./consts.js";

const displayCompanyInfo = ({ login, description, email, html_url }) => {

  Elements.companyInfoElement.innerHTML = `
  <h2 class="data-wrapper__headline">${login ? login : "no data"}</h2>
  <div class="data-wrapper__info-block">
    <p class="data-wrapper__paragraph">
      <span class="data-wrapper__label">Description: </span>
      ${description ? description : "no data"}
    </p>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Email:</span>
    <a class="link" href=${email}>${email ? email : "no data"}</a>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Url:</span>
    <a class="link" href=${html_url}>${html_url ? html_url : "no data"}</a>
  </div>
  `;

  Elements.companyInfoElement.classList.remove("hidden");
};

const displayRepo = ({ name, description, html_url, id, clone_url, ssh_url, stargazers_count, size } ) => {
  const reposElement = document.createElement("div");
  reposElement.id = id;
  reposElement.classList.add("data-wrapper");
  reposElement.innerHTML = ` 
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Repo:</span> 
    <span class="data-wrapper__headline">${name ? name : "no data"}</span>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">Description:</span> 
    <p>${description ? description : "no data"}</p>
  </div>
  <div class="data-wrapper__info-block">
    <span class="data-wrapper__label">URL:</span> 
    <a class="link" href=${html_url}>${html_url ? html_url : "no data"}</a>
  </div>
  `;
  Elements.reposContainerElement.appendChild(reposElement);

  Elements.reposContainerElement.classList.remove("hidden");
};

export const displayData = (companyData, reposData) => {
  companyData && displayCompanyInfo(companyData);
  reposData && reposData.forEach((repo) => displayRepo(repo));
};
