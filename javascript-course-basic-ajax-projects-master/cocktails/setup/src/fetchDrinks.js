import { showLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  try {
    showLoading();
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
