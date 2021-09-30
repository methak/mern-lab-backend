// ... your server js import/dependencies
require('./db/db')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000

const wishlistController = require('./controllers/wishlist')
const whiteList = ["http://localhost:3000"]
const corsOptions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1 || !origin ){
      callback(null, true);
    }else {
      callback(new Error("Not allowed by Cors"))
    }
  }
}

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use('/wishlist', wishlistController)



app.listen(PORT, () => {
  console.log(`MERN LAB is running on port ${PORT}`)
})