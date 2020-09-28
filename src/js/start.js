import fetchCountries from './fetchCountries'
import updateCountriesMarkup from './update-countries-markup';
import refs from './refs';


// const inputRef = document.querySelector("#name-input")
// inputRef.addEventListener(, event => {});
//     helloTextRef.textContent = 
//     if (event.target.value === '') {
//         helloTextRef.textContent = 'незнакомец'
//     }
// })
// fetch(`https://restcountries.eu/rest/v2/name/${name}`).then().then().catch()
// fetchCountries('poland').then(updateCountriesMarkup)


refs.searchInput.addEventListener('input', event => {
    // event.preventDefault();
  
    const form = event.currentTarget;
    const inputValue = event.target.value;
  
    refs.countriesContainer.innerHTML = '';
  
    fetchCountries(inputValue).then(updateCountriesMarkup);
  });