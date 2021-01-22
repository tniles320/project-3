const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { createBrotliCompress } = require("zlib");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    // origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// creates static directory for multer image uploads
// * path can be tested by using url "http://localhost:3001/public/uploads/1611297725732-cymbal-bg.jpg"
// ** in the future store image path and name to database separately to enable easier file editing and deletion
const directory = path.join(__dirname, "public/uploads");
app.use("/public/uploads", express.static(directory));

// sends file to client, *** client is using the file path, may be a way to use raw data that is sent from this
app.get("/upload/:file", function (req, res) {
  res.sendFile(`${__dirname}/public/uploads/${req.params.file}`);
});

require("./routes/api-routes.js")(app);

// allows mongoose to use atlas or local database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
