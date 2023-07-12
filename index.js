const generate = require("./generate.js");

const generateSchema = {
  body: {
    type: "object",
    properties: {
      secret: { type: "string", minLength: 1 },
      encoding: { type: "string", minLength: 1 },
    },
    required: ["secret"]
  },
};

async function bzmbTotp(fastify) {
  fastify.post("/bzmb-totp-generate", { schema: generateSchema }, async (req, res) => {
    const { secret, encoding } = req.body;
    try {
      const token = generate(secret, encoding);
      res
        .code(200)
        .send(token);
    } catch (error) {
      res
        .send(error);
    }
  });
}

module.exports = { microbond: bzmbTotp };