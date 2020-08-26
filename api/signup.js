const bcrypt = require("bcryptjs");
const { createClient } = require("../src/helpers/db-helper");
const { createJwtCookie } = require("../src/helpers/jwt-helper");


exports.handler = async (event) => {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    await dbClient.connect();
    const users = dbClient.usersCollection();
    const { email, password, coverphoto } = JSON.parse(event.body);
    const existingUser = await users.findOne({ email });

    if (existingUser !== null) {
      errorStatusCode = 409;
      throw new Error(`A user already exists with the email: ${email}`);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const { insertedId } = await users.insertOne({
      email,
      password: passwordHash,
      coverphoto
    });

    const jwtCookie = createJwtCookie(insertedId, email);

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": jwtCookie,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: insertedId, email, coverphoto })
    };
  } catch (err) {
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify({ msg: err.message })
    };
  } finally {
    dbClient.close();
  }
}