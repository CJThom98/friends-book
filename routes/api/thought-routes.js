const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addResponse,
    updateThought,
    removeThought,
    removeResponse
} = require('../../controllers/thought-contoller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router  
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

router
    .route('/:thoughtId/responses')
    .post(addResponse)

router
    .route('/:thoughtId/:responseId')
    .delete(removeResponse)

module.exports = router;