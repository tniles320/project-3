const passport = require("passport");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = function (app) {
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
          zipCode: req.body.zipCode,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });
  app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  });

  app.get("/account", (req, res) => {
    res.send(req.user);
  });

  app.get("/account/id:", (req, res) => {
    User.findOne({ _id: req.params.id }, (err) => {
      if (err) throw err;
      res.send(req.user);
    });
  });
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
