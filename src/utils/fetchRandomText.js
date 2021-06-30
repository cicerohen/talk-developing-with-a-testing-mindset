import { RANDOM_TEXT_URL } from "./config";

const fetchRandomText = async () => {
  try {
    const response = await fetch(RANDOM_TEXT_URL);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
};

export default fetchRandomText;
