const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const tasks = await Task.findOne({ _id: TaskID });
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletetask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const tasks = await Task.findOneAndDelete();
    if (!tasks) {
      return res.status(404).json({ msg: `no task with id ${TaskID}` });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const tasks = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res.status(404).json({ msg: `no task with id ${TaskID}` });
    }
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createTask,
  getTask,
  getAllTask,
  deletetask,
  updateTask,
};
