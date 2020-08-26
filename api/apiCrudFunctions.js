const mongoose = require('mongoose');
let Memory = require('../models/memory.model.js');
const uri = process.env.ATLAS_URI;
const db = mongoose.connection;


const getAll = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  try {
    const allMemories = await Memory.find();
    db.close();
    return {
      statusCode: 200,
      body: JSON.stringify(allMemories),
    };
  } catch (err) {
    db.close();
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
};

const getJustOne = async (id) => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  try {
    const memoryById = await Memory.findById(id);
    db.close();
    return {
      statusCode: 200,
      body: JSON.stringify(memoryById),
    };
  } catch (err) {
    console.log('PATRYK>>', err, '<<<');
    db.close();
    return {
      statusCode: 404,
      body: JSON.stringify(err)
    }
  }
};

const getByCategory = async (category) => {
  await mongoose.connect(uri, { useNewUrlParser: true });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  try {
    const allMemories = await Memory.find();
    const cities = allMemories.map(memory => memory[category]);
    console.log('All cities:', cities);
    const uniqueCities = cities.filter(onlyUnique);
    db.close();
    return {
      statusCode: 200,
      body: JSON.stringify(uniqueCities),
    };
  } catch (err) {
    db.close();
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
};

const getByCity = async (city) => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  try {
    const memoriesByCity = await Memory.find({ city });
    db.close();
    return {
      statusCode: 200,
      body: JSON.stringify(memoriesByCity),
    };
  } catch (err) {
    db.close();
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
};

const createNewMemory = async (reqBody) => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  if (!reqBody) {
    db.close();
    return {
      statusCode: 400,
      body: 'Incorrect body of the request'
    }
  }

  try {
    const { title, description, city, country, date, photos } = JSON.parse(reqBody);
    const newMemory = new Memory({
      title,
      description,
      city,
      country,
      date,
      photos
    });
    await newMemory.save();
    db.close();
    return {
      statusCode: 201,
      body: JSON.stringify(newMemory),
    };
  } catch (err) {
    db.close();
    return {
      statusCode: 503,
      body: 'Could not create a database entry, please try again'
    }
  }
};

const updateMemory = async (id, reqBody) => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  if (!reqBody) {
    db.close();
    return {
      statusCode: 400,
      body: 'Incorrect body of the request'
    }
  }
  try {
    const { title, description, city, country, date, photos } = JSON.parse(reqBody);
    const updatedMemory = await Memory.updateOne({ _id: id }, {
      title,
      description,
      city,
      country,
      date,
      photos
    }
    );
    // await updatedMemory.save();
    db.close();
    return {
      // never gets this response, even if the memory did update????
      statusCode: 200,
      body: 'Memory updated succesfully'
    };
  } catch (err) {
    console.log('PATRYK:', err);
    db.close();
    return {
      statusCode: 503,
      body: JSON.stringify(err)
    }
  }
};

const deleteMemory = async (id) => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  try {
    await Memory.deleteOne({ _id: id });
    db.close();
    return {
      statusCode: 200,
      body: 'Memory deleteted succesfully',
    };
  } catch (err) {
    db.close();
    return {
      statusCode: 404,
      body: 'Memory not found'
    }
  }
};

module.exports = {
  getAll,
  getJustOne,
  getByCategory,
  getByCity,
  createNewMemory,
  updateMemory,
  deleteMemory
}