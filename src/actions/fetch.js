export default function fetchData(path) {
	return fetch(`/.netlify/functions/api/${path}`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
		.then(res => res.json())
		.then(res => console.log('This worked', res))
		.catch(err => err.message);
}