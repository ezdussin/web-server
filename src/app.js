const path = require('path')
const express = require('express')
const hbs = require('hbs')

const PORT = process.env.PORT || 3000

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const jsonPath = path.join(__dirname, '../public/json')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index')
})

app.get('/api/albuns', (req, res) => {
    res.header('Content-Type', 'application/json')
    res.sendFile(`${jsonPath}/albuns.json`)
})

app.get('*', (req, res) => {
    res.render('404', { err: 'Code 404: page not found' })
})

app.listen(PORT, () => {
    console.log(`Server running in PORT ${PORT}`)
})