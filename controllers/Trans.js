const Category = require('../models/Categories');
const Transaction = require('../models/Transactions');
const Wallet = require('../models/Wallets');

const types = ["Income", "Expeness", "Transfer"];

console.log("Before foreignKey", Wallet)

Wallet.hasMany(Transaction, {foreignKey: "walletId"})
Transaction.belongsTo(Wallet, {foreignKey: "walletId"})

Category.hasMany(Transaction, {foreignKey: "cateId"})
Transaction.belongsTo(Category, {foreignKey: "cateId"})

const diff = async(req,res)=>{
	const { type, amount } = req.body;
	const { walletId } = req.params.id_w;
	const { cateId } = req.params.id_c
	try{
		const category = await Category.create({ type, walletId, cateId });
		switch(category.type){
			case "Income":
				category.amount += 0;
				break;
			case "Expeness":
				catergory.amount -= 0;
				break;
			default:
				category.amount = 0;
		}
		return res.json(category)
	}catch(error){
		console.log(error);
		res.status(500).json(error);
	}
}

module.exports = {
	diff
}