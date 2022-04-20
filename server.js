const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("./client"));
app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
  const name = "akm";
  res.send("hello");
});

// DB connections
require("./Db_con/connection");
// require("./controllers/testDB")();

const Wallet = require("./models/Wallets");

const port = 5000;

app.use("/api", require("./routes/main"));

async function run() {
  await sequelize.sync({ force: true }).then(() => console.log("conneted"));
  app.listen(port, console.log(`Server is run on port ${port}`));
}

run();
