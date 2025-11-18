// criar rotas

import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//criar rota

app.get('/estudantes', (req, res) => {
    const sql = 'SELECT * FROM dados_estudantes'
    conexao.query(sql, (erro, resultado) => {
        if(erro) {
            console.log(erro)
            return res.status(500).json({ erro: 'Erro ao buscar estudantes' })
        } else {
            return res.json(resultado)
        }
    })
})


app.get('/estudantes/:id', (req, res) =>{
    const id = req.params.id
    const sql = 'SELECT * FROM dados_estudantes WHERE id_estudante=?'
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})
export default app
