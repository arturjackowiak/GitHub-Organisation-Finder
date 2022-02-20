import { fetchData } from "./fetchData.js";
import { clearSite } from "./clearSite.js";
import { displayData } from "./displayData.js";

export const handleSearch = async (event) => {
  event.preventDefault();
  clearSite();
  const searchedText = event.target.elements.searchInput.value;
  const [fetchedCompanyData, fetchedReposData] = await fetchData(searchedText);
  displayData(fetchedCompanyData, fetchedReposData);
};
