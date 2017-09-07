/* Server file */
const express = require('express')
const helmet = require('helmet')
const compression = require('compression')

PORT = 3001

let app = express()

app.use(helmet())
app.use(compression())

app.use('/static', express.static('static'))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
