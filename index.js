const speakeasy = require("speakeasy");

module.exports = {
  
  async microbond(fastify, options) {
    fastify.get("/bzmb-totp-generator", (req, res) => {
      const token = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });
      return token;
    });
  },
  options: {},
};