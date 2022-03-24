const router = require("express").Router();
const { NewWallet, NewCategory } = require("../controllers/New")
const { diff } = require("../controllers/Trans")

router.route("/wallet").post(NewWallet)
router.route("/category").post(NewCategory);

router.route("/diff/wa:/id_w/ca:/id_c").post(diff);
// router.route("/transaction").get(Types)

module.exports = router;