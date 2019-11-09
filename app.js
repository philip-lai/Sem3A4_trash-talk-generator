const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashtalk = require('./generate_trashtalk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  let trashTalk = ''
  if (options.career) {
    trashTalk = generateTrashtalk(req.body)
  } else {
    trashTalk = "選個職業吧"
  }
  console.log(trashTalk)
  res.render('index', { trashTalk: trashTalk, options: options })
})

// start and listen on the express server
app.listen(port, () => {
  console.log(`express is listening on localhost:${port}`)
})