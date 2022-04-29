const Category = require("../models/Categories");
const Transaction = require("../models/Transactions");
const Wallet = require("../models/Wallets");

const types = ["Income", "Expeness", "Transfer"];

console.log("Before foreignKey", Wallet);

Wallet.hasMany(Transaction, { foreignKey: "walletId" });
Transaction.belongsTo(Wallet, { foreignKey: "walletId" });

Category.hasMany(Transaction, { foreignKey: "cateId" });
Transaction.belongsTo(Category, { foreignKey: "cateId" });

const NewTransaction = async (req, res) => {
  const { type, amount } = req.body;
  const walletId = req.params.id_w;
  const cateId = req.query.id_c;
  console.log(cateId);
  try {
    const transaction = await Transaction.create({
      type,
      walletId,
      cateId,
      amount
    });
    const wallet = await Wallet.findOne({ where: { id: walletId } });
    switch (transaction.type) {
      case "Income":
        transaction.amount += 0;
        break;
      case "Expeness":
        transaction.amount -= 0;
        // Increase of the amount of the selected category
        break;
      case "Transfer":
        transaction.amount -= 0;
        const { receivedWallet } = req.body;
        const Rec = await Wallet.findOne({ where: { id: receivedWallet } });
        // Add New transaction to the received Wallet which type is income
        Rec.amount += amount;
        Wallet.update({ amount: Rec.amount }, { where: { id: Rec.id } });
        return res.json({ res: Rec.amount, Tx: transaction.amount });
      default:
        transaction.amount = 0;
        break;
    }
    wallet.amount += transaction.amount;
    Wallet.update({ amount: transaction.amount }, { where: { id: walletId } });
    console.log(transaction.amount);

    return res.json(transaction);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  NewTransaction
};
