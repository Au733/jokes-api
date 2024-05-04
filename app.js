const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.static('public'))
app.use('/api/v1', require('./routes/api-v1')) // append api-v1 routes
app.use(require('./routes/statics'))		   // append static routes

app.listen(port, () => console.log(`Server is running http://localhost:${port}`))
