const { response } = require("express");
const { responseObject } = require("../utility");
const {
  emailValidation,
  fullNameValidation,
  phoneNumberValidation,
} = require("../utility/formValidation");
const { contactUs_public_model } = require("./model");

const ContactUsAuth = (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // validating fullName
  fullNameValidation(name, res);

  //validating Email
  emailValidation(email, res);

  //validating phone
  phoneNumberValidation(phone, res);

  //public signup
  contactUs_public_model({ name, email, phone, subject, message })
    .then((response) => {
      if (response.error) {
        return res.send(responseObject(response.error.message, false));
      }
      res.send(responseObject("successful", true, req.body));
    })
    .catch((error) => {
      return res.send(responseObject());
    });
};
module.exports = { ContactUsAuth };
