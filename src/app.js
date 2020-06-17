require('dotenv').config();
const express = require( 'express')
const { json, urlencoded } = express
const morgan = require( 'morgan')
const cors = require( 'cors')
const { connect } = require( './db/config')

const app = express()


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))



const start = async () => {
  try {
    await connect()
    app.listen(process.env.PORT, () => {
      console.log(`connected to server`)
    })
  } catch (e) {
    console.error(e)
  }
}

start()