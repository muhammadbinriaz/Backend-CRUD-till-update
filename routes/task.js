const express = require("express");
const router = express.Router();

const {
  getTask,
  getAllTask,
  deletetask,
  createTask,
  updateTask,
} = require("../controllers/task");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deletetask);

module.exports = router;
