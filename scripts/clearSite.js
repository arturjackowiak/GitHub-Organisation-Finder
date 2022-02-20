import { Elements } from './consts.js';

export const clearSite = () => {
    Elements.errorElement.innerHTML = "";
    Elements.reposContainerElement.innerHTML = "";
    Elements.reposContainerElement.classList.add("hidden");
    Elements.companyInfoElement.innerHTML = "";
    Elements.companyInfoElement.classList.add("hidden");
}