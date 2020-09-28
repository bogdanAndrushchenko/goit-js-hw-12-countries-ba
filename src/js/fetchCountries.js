import { data } from "autoprefixer";

 
function fetchCountries(searchQuery) {

    const url =`https://restcountries.eu/rest/v2/name/${searchQuery}`;
    // const options = {
    //     headers: {
    //       Authorization: apiKey,
    //     },
    //   };
    
      return fetch(url) //options)
        .then(res => res.json())
        .then(data);
}

export default fetchCountries;