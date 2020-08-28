const fetchData = async (method, path) => {
  const data = await fetch(`/.netlify/functions/api/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return data.json();
};

export default fetchData;
