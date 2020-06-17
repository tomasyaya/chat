require('dotenv').config();
const express = require( 'express')
const morgan = require( 'morgan')
const path = require("path")
const { json, urlencoded } = express
const cors = require( 'cors')
const { connect } = require( './db/config')

const app = express()


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



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