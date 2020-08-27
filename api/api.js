const api = require('./apiCrudFunctions.js');
const jwtDecode = require('jwt-decode');


exports.handler = async (event) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);
  const jwtToken = event.headers.cookie.replace(/jwt=/,'');
  const email = jwtDecode(jwtToken).email;

  if (!segments.length) {
    return {
      statusCode: 200,
      body: "Welcome to Huggin's backend. Powered by Netlify Lambda functions.",
    }
  }

  if (segments[0] === 'memories') {
    switch (event.httpMethod) {
      case 'GET':
        if (segments.length === 1) {
          const allMemories = await api.getAll(email);
          return allMemories
        }
        if (segments.length === 2) {
          switch (segments[1]) {
            case 'cities':
              const allCities = await api.getByCategory(email, 'city');
              return allCities;
            case 'countries':
              const allCountries = await api.getByCategory(email, 'country');
              return allCountries;
            default:
              const oneMemory = await api.getJustOne(email, segments[1]);
              return oneMemory;
          }
        }
        if (segments.length === 3 && segments[1] === 'cities') {
          const memoriesByCity = await api.getByCity(email, segments[2]);
          return memoriesByCity;
        }
        return {
          statusCode: 400,
          body: 'Invalid endpoint'
        };
      case 'POST':
        const newMemory = await api.createNewMemory(email, event.body);
        return newMemory;
      case 'PUT':
        let putResponse = {
          statusCode: 400,
          body: 'Invalid endpoint'
        }
        if (segments.length === 2) {
          putResponse = await api.updateMemory(email, segments[1], event.body);
        }
        return putResponse;
      case 'DELETE':
        let deleteResponse = {
          statusCode: 400,
          body: 'Invalid endpoint'
        }
        if (segments.length === 2) {
          deleteResponse = await api.deleteMemory(email, segments[1]);
        }
        return deleteResponse;
      default:
        return {
          statusCode: 503,
          body: 'Unrecognized HTTP Method, must be one of `GET/POST/PUT/DELETE/OPTIONS`.'
        };
    }
  }

  return {
    statusCode: 404,
    body: 'Not found'
  }
};
