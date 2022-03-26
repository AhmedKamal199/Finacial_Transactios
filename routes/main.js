const router = require("express").Router();
const { NewWallet, NewCategory, test } = require("../controllers/New")
const { diff } = require("../controllers/Trans")
const { gui } = require("../controllers/getting")

router.route("/wallet").post(NewWallet)
router.route("/category").post(NewCategory);
router.route("/test").post(test);
router.route("/diff/wa/:id_w/ca/").post(diff);

router.route("/:id").get(gui)

// router.route("/transaction").get(Types)

module.exports = router;