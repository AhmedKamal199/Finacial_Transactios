const Wallet = require("../models/Wallets");
const Category = require("../models/Categories");
const Transaction = require("../models/Transactions");
const NewWallet = async (req, res) => {
  const { name, amount = 0 } = req.body;
  try {
    const wallet = await Wallet.create({ name, amount });
    return res.json(wallet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const NewCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    return res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Just for the test during writing the code
const test = async (req, res) => {
  const { name, Wname, Cname1, Cname2, type, amount } = req.body;
  const walletId = req.params.id_w;
  const cateId = req.query.id_c;
  try {
    const wallet1 = await Wallet.create({ name });
    const wallet2 = await Wallet.create({ name: Wname });
    const category1 = await Category.create({ name: Cname1 });
    const category2 = await Category.create({ name: Cname2 });

    const transaction = await Transaction.create({
      type,
      walletId,
      cateId,
      amount
    });
    switch (transaction.type) {
      case "Income":
        transaction.amount += 0;
        break;
      case "Expeness":
        transaction.amount -= 0;
        console.log(transaction.amount);
        break;
      default:
        transaction.amount = 0;
        break;
    }
    return res.json({ wallet1, wallet2, category1, category2, transaction });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  NewWallet,
  NewCategory,
  test
};
