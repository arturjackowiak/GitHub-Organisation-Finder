import { Elements } from "./consts.js";
import { apiUrl } from "./consts.js";

const fetchReposData = async (orgName) => {
    try{
      const response = await fetch(`${apiUrl}${orgName}/repos`);
      const data = await response.json();
      if(response.status !== 200 ) {
        throw new Error(data.message);
    }
      return data;
    }
    catch (err) {
        console.error(err);
        Elements.errorElement.textContent = `Error message: ${err.message}`;
    }
};

const fetchCompanyData = async (orgName) => {
  try{
    const response = await fetch(`${apiUrl}${orgName}`);
    const data = await response.json();
    if(response.status !== 200 ) {
      throw new Error(data.message);
  }
    return data;
  }
  catch (err) {
      console.error(err);
      Elements.errorElement.textContent = `Error message: ${err.message}`;
  }
};

export const fetchData = async (orgName) => {
  const companyData = await fetchCompanyData(orgName);
  const reposData = await fetchReposData(orgName);

  return [companyData, reposData];
};