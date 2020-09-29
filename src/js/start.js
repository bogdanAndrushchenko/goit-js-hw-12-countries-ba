import fetchCountries from './fetchCountries'

import error from './notification'
import refs from './refs';
import {
  updateCountryMarkup,
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
} from './update-countries-markup';
const debounce = require('lodash.debounce');




const search_inrut = debounce((event) => {
  const inputValue = event.target.value;
  cleanMarkupBefore()
  fetchCountries(inputValue).then(arr => {
    if (arr >= 10) {
      error('pam bam');
      return
    };
    if (arr.message) {
      error(arr.message);
      return;
    }
    countriesListMarkup(data);

  })
}, 1000)




refs.searchInput.addEventListener('input', search_inrut);
