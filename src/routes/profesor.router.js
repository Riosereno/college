const { getAll, create, getOne, remove, update } = require('../controllers/profesor.controllers');
const express = require('express');

const profesorRouter = express.Router();

profesorRouter.route('/')
    .get(getAll)
    .post(create);

    profesorRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = profesorRouter;