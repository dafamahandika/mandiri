require('./db/db')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const fileUpload = require('express-fileupload')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT
const kode_bank = process.env.KODE_BANK
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(fileUpload())

app.use(require('./middlewares/midelware-error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))