export const getScore = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers');
    const results = await response.json();
    return results.result;
  };