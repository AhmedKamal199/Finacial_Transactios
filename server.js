const express =require("express");
const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
	res.send("hello")
});
// DB connections
require("./Db_con/connection");
// require("./controllers/testDB")();

const Wallet = require('./models/Wallets');

const port = 5500;

app.use('/api',require("./routes/main"))

async function run(){
	await sequelize.sync({force:true}).then(()=> console.log("conneted"));
	app.listen(port, console.log(`Server is run on port ${port}`))
}

run();