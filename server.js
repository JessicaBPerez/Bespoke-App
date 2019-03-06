//Require NPM packages
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')


app.set('view engine', 'hbs')

//Register Middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))

app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))

app.use('/', routes)

// CONNECT MONGOOSE TO "bespoke"
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})