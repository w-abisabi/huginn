const fetchData = async (method, path ) => {
  return await fetch(`/.netlify/functions/api/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};

export default fetchData