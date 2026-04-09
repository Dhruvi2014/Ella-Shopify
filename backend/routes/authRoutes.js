const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    getUserProfile,
    getAllUsers,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/users').get(protect, getAllUsers);

module.exports = router;
