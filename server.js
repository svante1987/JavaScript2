if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY
const { application } = require('express')
const express = require ('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {

})

app.listen(3000, () => {
    console.log('server started')
})