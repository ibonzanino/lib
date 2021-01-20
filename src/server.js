const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/books', (req, res, next) => {
    res.send(dataBase.getBooks())
})

app.get('/books/:id', (req, res, next) => {
    res.send(dataBase.getBook(req.params.id))
})

app.post('/books', (req, res, next) => {
    const book = dataBase.saveBook({
        nome: req.body.name,
        descricao: req.body.desc,
        preco: req.body.price,
        ano: req.body.year,
        paginas: req.body.pages,
        acabamento: req.body.finish,
        idioma: req.body.lang,
        pais: req.body.country,
        peso: req.body.weight,
        isbn: req.body.isbn,
        autor: req.body.author
    })
    res.send(book)
})

app.put('/books/:id', (req, res, next) => {
    const book = dataBase.saveBook({
        id: req.params.id,
        nome: req.body.name,
        descricao: req.body.desc,
        preco: req.body.preco,
        ano: req.body.year,
        paginas: req.body.pages,
        acabamento: req.body.finish,
        idioma: req.body.lang,
        pais: req.body.country,
        peso: req.body.weight,
        isbn: req.body.isbn,
        autor: req.body.autor
    })
    res.send(book)
})

app.delete('/books/:id', (req, res, next) => {
    const book = dataBase.delBook(req.params.id)
    res.send(book)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})