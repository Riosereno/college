const { getAll } = require('../controllers/score.controllers');
const express = require('express');

const scoreRouter = express.Router();

scoreRouter.route('/')
    .get(getAll)

module.exports = scoreRouter;