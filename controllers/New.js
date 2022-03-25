const Wallet = require('../models/Wallets');
const Category = require('../models/Categories');
const NewWallet = async(req,res)=>{
	const { name } = req.body
	try{
		const wallet = await Wallet.create({ name });
		return res.json(wallet)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}

const NewCategory= async(req,res)=>{
	const { name } = req.body
	try{
		const category = await Category.create({ name });
		return res.json(category)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}


// Just for the test during writing the code
const test = async(req,res)=>{
	const { name, Wname, Cname1, Cname2 } = req.body
	try{
		const wallet1 = await Wallet.create({ name });
		const wallet2 = await Wallet.create({ name:Wname });
		const category1 = await Category.create({ name:Cname1 });
		const category2 = await Category.create({ name:Cname2 });
		return res.json({wallet1, wallet2, category1, category2})
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}

module.exports = {
	NewWallet,
	NewCategory,
	test
}