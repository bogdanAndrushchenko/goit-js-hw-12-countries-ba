import countriesTpl from '../templates/countries.hbs';
import refs from './refs';

function updateCountriesMarkup(data) {

  const markup = countriesTpl(data);
  
  refs.countriesContainer.classList.add('countries');
  console.log(markup);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
