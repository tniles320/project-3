const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const { createBrotliCompress } = require("zlib");

//Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
  cb(null, file.fieldname + '-' + Date.now() + 
  path.extname(file.originalname));
  }
});

//Init Upload 
const upload = multer ({
  storage: storage,
  limits:{filesize: 10}
}).single('myImage');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
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
app.post('/upload', (res, req) = {
 upload(req, res, (err) => {
  if(err){
    res.render('index', {
      msg: err
    });
  } else {
    console.log(req.file);
    res.send('test');
  }
 });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
