const mongoose = require('mongoose');
let Place = require('../models/place.model.js');

const getAll = async () => {
  try {
    let allPlaces = await Place.find();
    return {
      statusCode: 200,
      body: JSON.stringify(allPlaces),
    };
  } catch(err) {
    return {
      statusCode: 404,
      body: 'Invalid endpoint, try again'
    }
  }
};

const createNewMemory = async (reqBody) => {
  if (!reqBody) {
    return {
      statusCode: 400,
      body: 'Incorrect body of the request'
    }
  }

  try{
    const { username, description, city, title } = JSON.parse(reqBody);
    const newMemory = new Place({
      username,
      description,
      city,
      title,
    });
    await newMemory.save();
    return {
      statusCode: 201,
      body: JSON.stringify(newMemory),
    };
  } catch (err) {
    return {
      statusCode: 503,
      body: 'Could not create a database entry, please try again'
    }
  }

};

exports.handler = async (event) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);
  const uri = process.env.ATLAS_URI;
  await mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;

  switch (event.httpMethod) {
    case 'GET':
      const allEntries = await getAll();
      db.close();
      return allEntries;
    case 'POST':
      const newMemory = await createNewMemory(event.body);
      db.close();
      return newMemory;
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
