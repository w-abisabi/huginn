const { clearCookie } =  require("../src/helpers/jwt-helper");

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Set-Cookie": clearCookie(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "Logged out successfully" })
  };
}