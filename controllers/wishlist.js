const express = require('express')
const router = express.Router()
const WishList = require('../models/wishlist')

router.get('/', async (req, res) => {
  try {
    const allWishLists = await WishList.find()
    res.status(200).json(allWishLists)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (res, req) => {
  try {
    const foundWishList = await WishList.findById(req.params.id);
    res.status(200).json({ message: req.params.id })
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newWishList = await WishList.create(req.body)
    res.status(200).json(newWishList)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedWishList = await WishList.findByIDAndRemove(req.params.id)
    res.status(200).json(deletedWishList)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedWishList = await WishList.findbyIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedWishList)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router