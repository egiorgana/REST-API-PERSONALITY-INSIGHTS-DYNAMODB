require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// 
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3')
const { IamAuthenticator } = require('ibm-watson/auth')

const app = express()

// 
exports.personalityInsights = new PersonalityInsightsV3({
    authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
    version: '2016-10-19',
    url: process.env.URL
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// 
app.use('/pi', require('./routes/index.route'))

app.listen(process.env.PORT, () => console.log('Server Connected'))