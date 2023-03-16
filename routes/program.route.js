import express from "express";
import programController from "../controllers/program.controller.js";

const router = express.Router();

// const {
// 	getProg,
// 	setProg,
// 	updateProg,
// 	deleteProg,
// } = require("../controllers/program.controller");


// router.route("/").get("/program", programController)


// router.route("/").get(getProg).post(setProg);
// router.route("/:id").delete(deleteProg).put(updateProg);

router.route("/").get(programController.getProg).post(programController.setProg);

router.route("/:id").delete(programController.deleteProg).put(programController.updateProg);

export default router;
