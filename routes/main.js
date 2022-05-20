const router = require("express").Router();
const { NewWallet, NewCategory, test } = require("../controllers/New");
const { NewTransaction } = require("../controllers/Trans");
const { gui, getWallets } = require("../controllers/getting");

router.route("/wallet").post(NewWallet);
router.route("/category").post(NewCategory);
router.route("/transaction/wa/:id_w/ca/").post(NewTransaction);

router.route("/test/wa/:id_w/ca/").post(test); // Test API

router.route("/").get(gui);
router.route("/wallets").get(getWallets);
router.route("/categories").get(getCategories);
router.route("/transactions").get(getTransactions);

// router.route("/transaction").get(Types)

module.exports = router;
