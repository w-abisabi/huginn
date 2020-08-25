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
          const oneMemory = await api.getJustOne(segments[1]);
          return oneMemory;
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

// ================LEVY GOES HERE ==================================
// exports.handler = async event => {
//   const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
//   const segments = path.split('/').filter(e => e);
//   const sinceHeader = event.headers['x-enzo-delta'];

//   switch (event.httpMethod) {
//     case 'GET':
//       if (segments.length === 0) {
//         return api.read();
//       }
//       if (segments.length === 1) {
//         return api.read(segments[0]);
//       }
//       return response.error({ message: 'Too many segments in `GET` request.' });
//     case 'POST':
//       return api.create(JSON.parse(event.body));
//     case 'PUT':
//       if (segments.length === 1) {
//         return api.update(segments[0], JSON.parse(event.body));
//       }
//       return response.error({ message: 'Invalid segments in `PUT` request.' });
//     case 'DELETE':
//       if (segments.length === 1) {
//         return api.delete(segments[0]);
//       }
//       return response.error({ message: 'Invalid segments in `DELETE` request.' });
//     case 'OPTIONS':
//       if (sinceHeader.length > 0) {
//         return api.delta(sinceHeader);
//       }
//       return response.error({ message: 'Missing `X-ENZO-DELTA` header in request.' });
//     default:
//       return response.error({
//         message: 'Unrecognized HTTP Method, must be one of `GET/POST/PUT/DELETE/OPTIONS`.',
//       });
//   }
// };
