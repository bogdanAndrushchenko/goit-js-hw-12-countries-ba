import countriesTpl from '../templates/countries.hbs';
import oneCountryTpl from '../templates/forOneCounty.hbs'
import refs from './refs';

function updateCountryMarkup(data) { ///countryMarkup
  refs.countryContainer.classList.add('countries');
  refs.countryContainer.innerHTML = oneCountryTpl(data);

}

function countriesListMarkup(data) { ///countriesMarkup
  const markup = countriesTpl(data);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}



function cleanCountryMarkup() { //clearCountry
  refs.countryContainer.classList.remove('countries');
  refs.countryContainer.innerHTML = " ";
}


function cleanMarkupBefore() { ///clearBeforeMarkup
  refs.countriesList.innerHTML = " ";

}

function cleanInputValue() { 
  refs.searchInput.value = " ";
}

const message = 'Danger!!!'





export {
  updateCountryMarkup,
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
  message,
}
