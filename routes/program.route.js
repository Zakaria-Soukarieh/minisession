// import Express from "express";
// import programController from "../controllers/program.controller";

// const router = express.Router();
// router.route("/").get("/program", programController)



// export default router

const express = require("express");
const router = express.Router();
const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
