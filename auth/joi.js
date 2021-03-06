const Joi = require("@hapi/joi");

const schemaAuth = Joi.object({
  username: Joi.string().email().min(6).required().messages({
    "string.email": "ftghyjg",
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});

const validateInputAsync = (data) => {
  return schemaAuth.validateAsync(data, { abortEarly: false });
};

module.exports.validateInputAsync = validateInputAsync;

// const validateInput = async (data) => {
//   //   let res = Joi.validate(data, schemaAuth);
//   try {
//     let res = await schemaAuth.validateAsync(data);
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

// validateInput({ username: "1@a.com", password: "ertrty456" });
