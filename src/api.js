const apiUrl = 'https://cat-fact.herokuapp.com';

const fetchCatFact = async () => {
  try {
    const response = await fetch(`${apiUrl}/facts/random`);
    if (!response.ok) {
      throw new Error('Network nicht gut');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error: ', error.message);
    throw error;
  }
};

export default fetchCatFact;