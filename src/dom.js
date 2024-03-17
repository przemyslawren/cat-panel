import fetchCatFact from './api.js';

const updateCatFact = async () => {
  const catFactData = await fetchCatFact();
  const catFactElement = document.getElementById('catFact');

  if (catFactData && catFactData.text) {
    catFactElement.textContent = catFactData.text;

    localStorage.setItem('catFact', JSON.stringify(catFactData));
  } else {
    catFactElement.textContent = "Sorry, couldn't load a cat fact!";
  }
};

updateCatFact();

export default updateCatFact;
