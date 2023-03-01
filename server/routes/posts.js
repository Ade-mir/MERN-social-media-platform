import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get('/', verifyToken, getFeedPosts); // Grab the user feed when we are on the homepage. Here is where we tailor what the feed is to each person. For now just everything to everyone
router.get('/:userId', verifyToken, getUserPosts); // Only get relevant users posts.

// UPDATE
router.patch('/:id/like', verifyToken, likePost);

export default router;
