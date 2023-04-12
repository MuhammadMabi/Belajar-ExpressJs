const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const myLogger = function (request, response, next) {
    // console.log('LOGGED')
    request.time = new Date()
    next()
}

app.use(myLogger)

app.get('/', (request, response) => {
    const kelas = {
        id: 1,
        nama: 'ExpressJs',
        date: request.time.toString()
    }
    response.send(kelas)
})

app.get('/test', (request, response) => {
    response.redirect('/')
})

app.use(userRouter)

app.listen(port, () => {
    console.log(`Server is okay on port ${port}`)
})