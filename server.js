const express = require("express");

const cors = require("cors");

//app.use(express.static("./client1"));
const app = express();
app.use(cors("*"));
app.use(express.json());

app.get("/a", (req, res) => {
  const name = "akm";
  res.json({ name });
});

// DB connections
require("./Db_con/connection");
// require("./controllers/testDB")();

const Wallet = require("./models/Wallets");

const port = 5500;

app.use("/api", require("./routes/main"));

async function run() {
  await sequelize.sync({ force: false }).then(() => console.log("conneted"));
  app.listen(port, console.log(`Server is run on port ${port}`));
}

run();
