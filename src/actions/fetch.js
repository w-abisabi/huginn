export default function fetchData(path) {
  fetch(`/.netlify/functions/api/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json());
}
