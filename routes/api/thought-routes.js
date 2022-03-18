const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addResponse,
    updateThought,
    deleteThought,
    deleteResponse
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router  
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/responses')
    .post(addResponse)

router
    .route('/:thoughtId/:responseId')
    .delete(deleteResponse)

module.exports = router;