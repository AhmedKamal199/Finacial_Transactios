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
		const wallet = await Category.create({ name });
		return res.json(wallet)
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
}

module.exports = {
	NewWallet,
	NewCategory
}