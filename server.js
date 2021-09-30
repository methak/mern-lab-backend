// ... your server js import/dependencies
require('./db/db')
const express = require('express')
const app = express()
const PORT = 9000

const wishlistController = require('./controllers/wishlist')
app.use('/wishlist', wishlistController)

app.listen(PORT, () => {
  console.log(`MERN LAB is running on port ${PORT}`)
})