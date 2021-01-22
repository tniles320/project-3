const passport = require("passport");
const bcrypt = require("bcrypt");
const { User, Post, Message } = require("../models");
const multer = require("multer");

module.exports = function (app) {
  // login route with authentication
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
        });
      }
    })(req, res, next);
  });
  // creates a new user
  app.post("/api/register", (req, res) => {
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
  // posts new post after finding logged user's info
  app.post("/api/post", (req, res) => {
    User.findOne({ username: req.user.username }).then((dbUser) => {
      const newPost = new Post({
        user: dbUser._id,
        username: dbUser.username,
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount,
        location: req.body.location,
        worktype: req.body.worktype,
        worktypeinquiry: req.body.worktypeinquiry,
        upload: req.body.upload,
        contact: req.body.contact,
      });
      newPost.save();
      res.send("Post Created");
    });
  });

  // Image Upload (maybe)

  //Set Storage Engine
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  //Init Upload
  const upload = multer({
    storage: storage,
  });

  app.post("/api/upload", upload.single("file"), (req, res) => {
    // upload((err) => {
    //   if (err) {
    //     res.render("index", { msg: err });
    //   } else {
    //     console.log(req.file);
    //     res.send("test");
    //   }
    // });
    res.json(req.file).status(200);
  });

  // gets all of logged in user's posts
  app.get("/api/post", (req, res) => {
    User.findOne({ username: req.user.username }).then((dbUser) => {
      Post.find({ user: dbUser._id }).then((dbPost) => {
        res.send(dbPost);
      });
    });
  });
  // gets all posts to display on dashboard
  app.get("/api/dashboard", (req, res) => {
    Post.find({}).then((dbPost) => {
      res.send(dbPost);
    });
  });
  app.get("/api/user", (req, res) => {
    if (req.user) {
      User.findOne({ username: req.user.username }).then((dbUser) => {
        res.send(dbUser); // The req.user stores the entire user that has been authenticated inside of it.
      });
    } else {
      res.json({
        error: true,
        error_message: "cannot fetch user if not logged in ",
      });
    }
  });

  // sends user info on account page
  app.get("/api/account", (req, res) => {
    res.send(req.user);
  });

  app.put("/api/account", (req, res) => {
    User.updateOne(
      { _id: req.body._id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          zipCode: req.body.zipCode,
        },
      }
    ).then((dbUser) => {
      res.send(dbUser);
    });
  });

  // NOT COMPLETE gets indiviual user account, used to view accounts other than the logged in user
  app.get("/api/account/id:", (req, res) => {
    User.findOne({ _id: req.params.id }, (err) => {
      if (err) throw err;
      res.send(req.user);
    });
  });

  // single post route
  app.get("/api/post/:id", (req, res) => {
    Post.findOne({ _id: req.params.id }).then((dbPost) => {
      res.send(dbPost);
    });
  });

  app.put("/api/post/:id", (req, res) => {
    Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          desciption: req.body.description,
          location: req.body.location,
          amount: req.body.amount,
          worktype: req.body.worktype,
          contact: req.body.contact,
        },
      }
    ).then((dbPost) => {
      res.send(dbPost);
    });
  });

  app.delete("/api/post/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id }).then((dbPost) => {
      res.send("Post deleted");
    });
  });

  // logs out user
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
