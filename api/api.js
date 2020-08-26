const api = require('./apiCrudFunctions.js');

exports.handler = async (event) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);

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
          const allMemories = await api.getAll();
          return allMemories
        }
        if (segments.length === 2) {
          switch (segments[1]) {
            case 'cities':
              const allCities = await api.getByCategory('city');
              return allCities;
            case 'countries':
              const allCountries = await api.getByCategory('country');
              return allCountries;
            default:
              const oneMemory = await api.getJustOne(segments[1]);
              return oneMemory;
          }
        }
        if (segments.length === 3 && segments[1] === 'cities') {
          const memoriesByCity = await api.getByCity(segments[2]);
          return memoriesByCity;
        }
        return {
          statusCode: 400,
          body: 'Invalid endpoint'
        };
      case 'POST':
        const newMemory = await api.createNewMemory(event.body);
        return newMemory;
      case 'PUT':
        let putResponse = {
          statusCode: 400,
          body: 'Invalid endpoint'
        }
        if (segments.length === 2) {
          putResponse = await api.updateMemory(segments[1], event.body);
        }
        return putResponse;
      case 'DELETE':
        let deleteResponse = {
          statusCode: 400,
          body: 'Invalid endpoint'
        }
        if (segments.length === 2) {
          deleteResponse = await api.deleteMemory(segments[1]);
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
