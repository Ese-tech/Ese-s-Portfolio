
const express = require('express');
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find({}).populate('comments.user', 'name');
  res.json(products);
});

// Add a comment
router.post('/:id/comments', protect, async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.comments.push({ user: req.user.userId, comment: req.body.comment });
  await product.save();
  res.status(201).send('Comment added');
});

// Edit a comment
router.put('/:id/comments/:commentId', protect, async (req, res) => {
  const product = await Product.findById(req.params.id);
  const comment = product.comments.id(req.params.commentId);
  if (comment.user.toString() !== req.user.userId) {
    return res.status(403).send('Not authorized');
  }
  comment.comment = req.body.comment;
  await product.save();
  res.send('Comment updated');
});

// Delete a comment
router.delete('/:id/comments/:commentId', protect, async (req, res) => {
  const product = await Product.findById(req.params.id);
  const comment = product.comments.id(req.params.commentId);
  if (comment.user.toString() !== req.user.userId && !req.user.isAdmin) {
    return res.status(403).send('Not authorized');
  }
  product.comments.pull(req.params.commentId);
  await product.save();
  res.send('Comment deleted');
});

// Admin routes
router.post('/', protect, admin, async (req, res) => {
  // Logic to create a product
});

router.put('/:id', protect, admin, async (req, res) => {
  // Logic to update a product
});

router.delete('/:id', protect, admin, async (req, res) => {
  // Logic to delete a product
});

module.exports = router;
