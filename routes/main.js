const router = require("express").Router();
const { NewWallet, NewCategory, test } = require("../controllers/New")
const { NewTransaction, TransferWallet } = require("../controllers/Trans")
const { gui } = require("../controllers/getting")

router.route("/wallet").post(NewWallet)
router.route("/category").post(NewCategory);
router.route("/transaction/wa/:id_w/ca/").post(NewTransaction);
router.route("/Transfer").post(TransferWallet);

router.route("/test/wa/:id_w/ca/").post(test); // Test API



router.route("/").get(gui)

// router.route("/transaction").get(Types)

module.exports = router;