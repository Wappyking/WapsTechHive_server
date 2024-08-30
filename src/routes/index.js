const { Router } = require("express");
const routes = Router();

/* GET home page. */
// routes.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// routes.use("/", indexRouter);
// routes.use("/users", usersRouter);
// routes.use("/testAPI", textAPIRouter);
routes.use("/", require("../auth/auth-routes"));

module.exports = routes;
