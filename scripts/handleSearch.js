import { Elements } from './consts.js';
import { fetchReposData } from './fetchData.js';
import { clearSite } from './clearSite.js';

export const handleSearch = async (event) => {
  event.preventDefault();
  clearSite();
  const searchedText = event.target.elements.searchInput.value;
  const fetchedReposData = await fetchReposData(searchedText);
  console.log(fetchedReposData);

};