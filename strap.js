module.exports = async ()=> {

	const Category = require('./models/Categories');
	const Transaction = require('./models/Transactions');
	const Wallet = require('./models/Wallets');

	console.log("Before foreignKey", Wallet)

	Wallet.hasMany(Transaction, {foreignKey: "walletId"})
	Transaction.belongsTo(Wallet, {foreignKey: "walletId"})
	
	const errHandler = (err) =>{
		console.error("Error::", err);
	};
	
	const wallet = await Wallet.build({name: "MYBOK"})
	console.log(wallet.name);
	await wallet.save();
	


// 	const transaction = await Transaction.create({
// 		type: "income",
// 		walletId: wallet.id
// 	})//.catch(errHandler);


// 	const wallets = await Transaction.findAll({
// 		where: {type: "MYBOK"},
// 		include: [{ model: Transaction, as: "Transactions"}]
// 	})//.catch(errHandler);

// 	console.log("MYBOK: ", wallets)
 }