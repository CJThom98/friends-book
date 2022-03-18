const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    newFriend,
    updateUser,
    deleteUser,
    removeFriend
  } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(newFriend)
  .delete(removeFriend)

module.exports = router;