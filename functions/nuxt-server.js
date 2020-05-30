const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const port = process.env.PORT || 3000

const config = require('./nuxt.config.js')
config.dev = process.env.NODE_ENV === 'development'
const nuxt = new Nuxt(config)

app.get('/api/ping', (req, res) => {
  console.log('unko');
  nuxt-dist/
  res.json({ ping: 'pong' })
})

app.use(async (req, res) => {
  console.log('30iVx');
  await nuxt.ready()
  nuxt.render(req, res)
})

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

function listen() {
  console.log('=== listen ===')
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

module.exports = app
