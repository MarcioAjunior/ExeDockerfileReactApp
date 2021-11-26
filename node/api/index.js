const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express()

app.use(cors())
app.use(express.json())

const port = 3001

const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'root',
  database : 'nodedb',
})

app.get('/', (req, res) => { 
   connection.query(`SELECT * FROM PEOPLE;`,  (err, rows, fields) => {
     if(err !=null){
      throw err;
     }  
   res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
   console.log(req.headers.host)
   return res.send({'rows' : rows})
  })
})

app.post('/', (req, res) => {
    const nome = req.body.nome
    connection.query(`INSERT INTO PEOPLE(nome) VALUES('${nome}');`, (err, rows, fields) => {
        if(err != null){
          throw err;
        }
    console.log(req.headers.host)
    return res.send('Ok')
    })
})

app.delete('/:id', (req, res) => {
    connection.query(`DELETE FROM PEOPLE WHERE id="${req.params.id}";`,(err, rows, fields) => {
      if(err !=null){
        throw err;
       } 
    console.log(req.headers.host)
    return res.send('Ok')
    })
})

app.listen(port, () => {
  console.log(`Api rodando => http://localhost:${port}`)
})