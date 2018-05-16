const express = require('express')
const morgan = require('morgan')
const randomstring = require('randomstring')
 

const app = express()
app.use(morgan('dev'))
app.use('/static', express.static('public'))



// ----------------------contents----------------------------------------------------


const urls = [
  {
    slug: randomstring.generate(8),
    longUrl: 'https://www.naver.com'
  }
]


app.get('/', (req, res) => {res.render('index.ejs', {urls: urls})})

app.get('/:slug', (req, res) => {
  const urlItem = urls.find(item => item.slug === req.param.slug)
  if (urlItem) 
  {  res.redirect(301, urlItem.longUrl)
  } else {
    res.status(404)
    res.send("404 not found")
  }
 })


























// --------------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log('listening...')
})