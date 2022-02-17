import { Elements } from './consts.js';

export const clearSite = () => {
    Elements.errorElement.innerHTML = "";
    Elements.dataContainerElement.innerHTML = "";
}