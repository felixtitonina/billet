const app = require('./app')
const port = process.env.PORT || 8081

app.listen(port, () => console.info(`Listening on port localhost:${port}`))