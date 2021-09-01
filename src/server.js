const app = require('./app')
const port = process.env.PORT || 3008

app.listen(port, () => console.info(`Listening on port localhost:${port}`))