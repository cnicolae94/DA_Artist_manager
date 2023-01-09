require("dotenv").config();

// Express Server
const app = require("./app");

const PORT = 3000;

// Sequelize postgres db connection
const db = require("./db/db.js");

// Connection, sync DB with db.js params
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

app.get("/", function (req, res) {
  res.send("hello world!");
});
