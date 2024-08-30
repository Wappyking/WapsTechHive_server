const { Router } = require("express");
const { ContactUsAuth } = require("./auth-controller");
const routes = Router();

routes.post("/contact-us", ContactUsAuth);

module.exports = routes;
