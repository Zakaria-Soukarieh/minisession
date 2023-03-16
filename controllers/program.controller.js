const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();

	res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text || !req.body.phone || !req.body.age) {
		res.status(400);
		throw new Error("Please fill all required fields");
	}

	const goal = await Goal.create({
		text: req.body.text,
		phone: req.body.phone,
		age: req.body.age,
	});

	res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}
	await goal.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
