import countriesTpl from '../templates/countries.hbs';
import oneCountryTpl from '../templates/forOneCounty.hbs'
import refs from './refs';

function updateCountryMarkup(data) { 
  refs.countryContainer.classList.add('countries');
  refs.countryContainer.innerHTML = oneCountryTpl(data);

}

function countriesListMarkup(data) { 
  const markup = countriesTpl(data);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}



function cleanCountryMarkup() { 
  refs.countryContainer.classList.remove('countries');
  refs.countryContainer.innerHTML = " ";
}


function cleanMarkupBefore() { 
  refs.countriesList.innerHTML = " ";

}

function cleanInputValue() { 
  refs.searchInput.value = " ";
}

const message = 'Too many matches found. Please enter a more specific query!'





export {
  updateCountryMarkup,
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
  message,
}
