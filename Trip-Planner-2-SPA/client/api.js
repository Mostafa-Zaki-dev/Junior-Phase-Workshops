const fetchAttractions = async () => {
  try {
    const url = 'http://localhost:3000/api';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAttractions;
