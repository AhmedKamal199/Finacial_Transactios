const Category = require('../models/Categories');
const Transaction = require('../models/Transactions');
const Wallet = require('../models/Wallets');

Wallet.hasMany(Transaction, {foreignKey: "walletId"})
Transaction.belongsTo(Wallet, {foreignKey: "walletId"})

Category.hasMany(Transaction, {foreignKey: "cateId"})
Transaction.belongsTo(Category, {foreignKey: "cateId"})


const errHandler = (err) =>{
		console.error("Error::", err);
};

const gui = async(req,res)=>{
	const trans = await Transaction.findAll({})
	const transaction = JSON.stringify(trans)
	const wallets = await Wallet.findAll({
		include: [{ model: Transaction, as: "Transactions", required:true}],
		// where: {id: walletId},
	}).catch(errHandler);
	// console.log("It is  ", wallets)	
	res.json({wallets})
}

const getWallets = async(req,res)=>{
	await Wallet.findAll({})
	.then(wallets => res.json(wallets));

}
module.exports = {
	gui,
	getWallets
}