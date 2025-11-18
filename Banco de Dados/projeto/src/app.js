// criar rotas 

import express from 'express'
import conexao from '../projeto_codigo/infra/conexao.js'

const app = express()

app.use(express.json())

//criar rota

app.get('/estudantesY', (req, res) =>{
    const sql = 'SELECT * FROM dados_estudantes'
    conexao.query(sql,(erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})

export default app
