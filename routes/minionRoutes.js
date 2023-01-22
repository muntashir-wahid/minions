const express = require("express");

const {
  createMinion,
  getMinions,
  getMinion,
  deleteMinion,
  updateMinion,
} = require("./../controllers/minionController");

const router = express.Router();

router.route("/").post(createMinion).get(getMinions);
router.route("/:id").get(getMinion).delete(deleteMinion).patch(updateMinion);

module.exports = router;
