const express =require("express");
const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
	res.send("hello")
});
// DB connections
require("./Db_con/connection");
// require("./strap")()
const Wallet = require('./models/Wallets');
const port = 5500;
app.post('/', async(req,res)=>{
	const { name } = req.body
	try{
		const wallet = await Wallet.create({ name });
		return res.json(wallet)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
})
async function run(){
	await sequelize.sync({force:true}).then(()=> console.log("conneted"));
	app.listen(port, console.log(`Server is run on port ${port}`))
}

run();