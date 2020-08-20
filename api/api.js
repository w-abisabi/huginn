const mongoose = require('mongoose');
let Place = require('../models/place.model.js');

exports.handler = async (event) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);
  const db = mongoose.connection;
  console.log('AURA AURA:', event);
  const reqBody = JSON.parse(event.body);

  const getAll = async () => {
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, { useNewUrlParser: true });
    const allPlaces = await Place.find();
    db.close();
    return {
      statusCode: 200,
      body: JSON.stringify(allPlaces),
    };
  };

  const createNewMemory = async (username, description, city, title) => {
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, { useNewUrlParser: true });
    const newMemory = new Place({
      username,
      description,
      city,
      title,
    });
    await newMemory.save();
    db.close();
    return {
      statusCode: 201,
      body: JSON.stringify(newMemory),
    };
  };

  switch (event.httpMethod) {
    case 'GET':
      return getAll();
    case 'POST':
      return createNewMemory(
        reqBody.username,
        reqBody.description,
        reqBody.city,
        reqBody.title
      );
    default:
      return response.error({
        message:
          'Unrecognized HTTP Method, must be one of `GET/POST/PUT/DELETE/OPTIONS`.',
      });
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
