require("dotenv").config();
const express = require("express");
const axios = require("axios");
const exp = express();

const credentialsContainer = {
  client_id: "22803",
  client_secret: "6919496f03acfdd6c3e463c747fa8be5",
  dAurl: "https://www.deviantart.com/oauth2",
};

const { client_id, client_secret, dAurl } = credentialsContainer;

// Express Server
const app = require("./app");

const PORT = 3000;

// Sequelize postgres db connection
const db = require("./db/db.js");

app.listen(process.env.PORT || PORT, () => {
  console.log(`DA Express server listening at localhost:${PORT}`);
  db.sync({ force: true })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Uh oh, error: " + error);
    });
});

// Deviantart Authorization setup

app.get("/callback", (req, res) => {
  const code = req.query.code;
  console.log(`Authorization code: ${code}`);
  res.send("Authorization code received, you can close this window.");
});

const authOptions = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: client_id,
    password: client_secret,
  },
};

app.get("/callback", (req, res) => {
  const code = req.query.code;
  console.log(`Authorization code: ${code}`);
  axios
    .post(
      dAurl,
      {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3001/callback",
      },
      authOptions
    )
    .then((response) => {
      console.log(response.data);
      // Use the access_token in the response to make API requests
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});
