const router = require('express').Router();

const {
    getAllthoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllthoughts);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);
    


router.route('/:userId').post(addThought);


router
    .route('/:userId/:thoughtId')
    .put(addReaction);
    
    


router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;