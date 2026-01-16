const { CustomAPIError } = require("../errors/customError");

const errorHandlerMiddlware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again` });
};

module.exports = errorHandlerMiddlware;

//JUST INCASE FOR LEARNING
// const errorHandlerMiddlware = (err, req, res, next) => {
//   console.log(err);
//   return res.status(err.status).json({ msg: err.message });
// };

// module.exports = errorHandlerMiddlware;
