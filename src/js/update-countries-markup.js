import countriesTpl from '../templates/countries.hbs';
import oneCountryTpl from '../templates/forOneCounty.hbs'
import refs from './refs';

function updateCountryMarkup(data) { ///countryMarkup
  refs.countryContainer.classList.add('countries');
  refs.countryContainer.innerHTML = oneCountryTpl(...data);

}

function countriesListMarkup(data) { ///countriesMarkup
  const markup = countriesTpl(data);
  refs.countriesList.insertAdjacentElement('beforeend', markup);
}



function cleanCountryMarkup() { //clearCountry
  refs.countryContainer.classList.remove('countries');
  refs.countryContainer.innerHTML = " ";
}


function cleanMarkupBefore() { ///clearBeforeMarkup
  refs.countriesList.innerHTML = " ";

}

function cleanInputValue() { ///clearInput
  refs.searchInput.value = " ";
}





export {
  updateCountryMarkup,
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
}



//////////////////////////
// import countriesTemplate from '../templates/countries.hbs';
// import countryTemplate from '../templates/country.hbs';
// import ref from '../js/refs.js';








// export {
//   countriesMarkup,
//   clearBeforeMarkup,
//   countryMarkup,
//   clearInput,
//   clearCountry,
// };
