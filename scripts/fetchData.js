import { Elements } from "./consts.js";
import { apiUrl } from "./consts.js";

export const fetchReposData = async (orgName) => {
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

