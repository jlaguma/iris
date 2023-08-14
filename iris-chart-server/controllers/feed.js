const mockData = require('../data/mockData');

// GET /feed/data
exports.getData = (req, res, next) => {
  res.status(200).json(mockData);
};
