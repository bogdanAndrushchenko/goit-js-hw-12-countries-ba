import { data } from "autoprefixer";
import error from "./notification";

 
function fetchCountries(searchQuery) {

    const url =`https://restcountries.eu/rest/v2/name/${searchQuery}`;
    // const options = {
    //     headers: {
    //       Authorization: apiKey,
    //     },
    //   };
    
      return fetch(url) //options)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export default fetchCountries;