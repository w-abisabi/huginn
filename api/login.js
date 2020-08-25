const bcrypt = require("bcryptjs");
const { createClient } = require("../src/helpers/db-helper");
const { createJwtCookie } = require("../src/helpers/jwt-helper");


exports.handler = async (event) => {
  const dbClient = createClient()
  let errorStatusCode = 500

  try {
    await dbClient.connect();
    const users = dbClient.usersCollection();
    const { email, password } = JSON.parse(event.body);
    const existingUser = await users.findOne({ email });

    if (existingUser == null) {
      errorStatusCode = 401;
      throw new Error(`Invalid password or email`);
    }

    const matches = await bcrypt.compare(password, existingUser.password)
    if (!matches) {
      errorStatusCode = 401;
      throw new Error(`Invalid password or email`);
    }

    const userId = existingUser._id;
    const jwtCookie = createJwtCookie(userId, email);

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": jwtCookie,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, email }),
    }
  } catch (err) {
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify({ msg: err.message }),
    }
  } finally {
    dbClient.close()
  }
}