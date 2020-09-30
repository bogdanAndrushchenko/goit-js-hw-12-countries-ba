import {
  data
} from 'autoprefixer';
import fetchCountries from './fetchCountries'

import error from './notification'
import refs from './refs';
import {
  updateCountryMarkup,
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
  message
} from './update-countries-markup';
const debounce = require('lodash.debounce');


cleanInputValue();

const search_inrut = debounce((event) => {
  
  const inputValue = event.target.value;
  cleanMarkupBefore();
  cleanCountryMarkup();
  fetchCountries(inputValue)
    .then(countries => {
      if (countries.length >= 10) {
        error(message);
        return;
      }
      if (countries.message) {
        error(countries.message);
        return;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        countriesListMarkup(countries);

      }


      if (countries.length === 1) {
        updateCountryMarkup(countries);
      }
    }, console.log)
    .catch(err => error(err));
}, 1000)






refs.searchInput.addEventListener('input', search_inrut);
