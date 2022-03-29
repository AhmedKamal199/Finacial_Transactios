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



const NewTransaction = async(req,res)=>{
	const { type, amount } = req.body;
	const  walletId  = req.params.id_w;
	const  cateId  = req.query.id_c;
	console.log(cateId)
	try{
		const transaction = await Transaction.create({ type, walletId, cateId, amount });
		switch(transaction.type){
			case "Income":
					transaction.amount += 0;
				break;
			case "Expeness":
				transaction.amount -= 0;
				console.log(transaction.amount)
				break;
			case "Transfer":
				transaction.amount -= amount;
				Transaction.update({ amount: transaction.amount},{ where: {id: transaction.id} })
				const { receivedWallet } = req.body;
				const Rec = await Transaction.findOne({where: {walletId: receivedWallet}});
				Rec.amount += amount
				Transaction.update({ amount: Rec.amount},{ where: {id: Rec.id} })
				return res.json({res: Rec.amount, Tx: transaction.amount})
			default:
				transaction.amount = 0;
				break;
		}
		console.log(transaction.amount)
		
		return res.json(transaction)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}
const TransferWallet = async(req,res)=>{
	const { receivedWallet } = req.body;
	const Rec = await Transaction.findAll({where: {id: receivedWallet}});
	console.log(Rec.toJSON());
	res.json({res: Rec})

}
module.exports = {
	NewTransaction,
	TransferWallet
}