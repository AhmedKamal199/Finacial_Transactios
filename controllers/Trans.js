const Category = require('../models/Categories');
const Transaction = require('../models/Transactions');
const Wallet = require('../models/Wallets');

const types = ["Income", "Expeness", "Transfer"];
// require("./testDB")();
console.log("Before foreignKey", Wallet)

Wallet.hasMany(Transaction, {foreignKey: "walletId"})
Transaction.belongsTo(Wallet, {foreignKey: "walletId"})

Category.hasMany(Transaction, {foreignKey: "cateId"})
Transaction.belongsTo(Category, {foreignKey: "cateId"})


// const NewIn = async()=>{
// 	try{
// 		const category = await Category.create({ name:"Transport" });
// 		console.log(category)
// 		const wallet = await Wallet.create({ name:"MYBOK" });
// 		console.log(wallet)
// 		}catch(err){
// 		console.log(err);
// 	}
// }

// NewIn();



const diff = async(req,res)=>{
	//require("./testDB")();
	const { type, amount } = req.body;
	const  walletId  = req.params.id_w;
	const  cateId  = req.query.id_c;
	console.log(cateId)
	try{
		const transaction = await Transaction.create({ type, walletId, cateId, amount:0 });
		switch(transaction.type){
			case "Income":
					transaction.amount += amount;
				break;
			case "Expeness":
				transaction.amount -= amount;
				console.log(transaction.amount)
				break;
			default:
				transaction.amount = 0;
		}
		console.log(transaction.amount)
		
		return res.json(transaction)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}

module.exports = {
	diff
}