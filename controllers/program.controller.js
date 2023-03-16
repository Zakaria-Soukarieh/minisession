// const asyncHandler = require("express-async-handler");
// const prog = require("../models/program.model");
import asyncHandler from "express-async-handler";
import prog from "../models/program.model.js";

const getProg = asyncHandler(async (req, res) => {
	const Progs = await prog.find();

	res.status(200).json(Progs);
});

const setProg = asyncHandler(async (req, res) => {
	if (
		!req.body.title ||
		!req.body.sub_title ||
		!req.body.description /* || !req.body.image */
	) {
		res.status(400);
		throw new Error("Please fill all required fields");
	}

	const Prog = await prog.create({
		title: req.body.title,
		sub_title: req.body.sub_title,
		description: req.body.description,
		// image: req.body.image,
	});
	res.status(200).json(Prog);
});

const updateProg = asyncHandler(async (req, res) => {
	const Prog = await prog.findById(req.params.id);

	if (!Prog) {
		res.status(400);
		throw new Error("Prog not found");
	}

	const updatedProg = await prog.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedProg);
});

const deleteProg = asyncHandler(async (req, res) => {
	const Prog = await prog.findById(req.params.id);

	if (!Prog) {
		res.status(400);
		throw new Error("Prog not found");
	}
	await Prog.remove();

	res.status(200).json({ id: req.params.id });
});

export default {
	getProg,
	setProg,
	updateProg,
	deleteProg,
};
