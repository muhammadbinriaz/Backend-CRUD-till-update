const Task = require("../models/task");
const asyncWrapper = require("../middlewares/async");

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }
  res.status(200).json({ task });
});

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const deletetask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete();
  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  createTask,
  getTask,
  getAllTask,
  deletetask,
  updateTask,
};
