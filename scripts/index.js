import { handleSearch } from "./handleSearch.js";
import { Elements } from "./consts.js";


Elements.formElement.addEventListener('submit', handleSearch);
