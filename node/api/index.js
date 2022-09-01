const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express()
const axios = require('axios')

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
   connection.query(`SELECT * FROM PEOPLE;`,  (err, rows,) => {
     if(err !=null){
      throw err;
     }  
   res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
   console.log(req.headers.host)
   return res.send({'rows' : rows})
  })

})

app.post('/insert_peoples', async(req, res) => {
  console.log('AKIII')  
  const {data} = await axios.get('https://swapi.dev/api/people')
  console.log(data, 'data')
  console.log(data.results)
  data.results.forEach(element => {
    connection.query(`INSERT INTO PEOPLE(nome, height, mass, hair_color, skin_color, eye_color, birth_year, gender, created, edited, url) VALUES(
      '${element.name}',
      '${element.height}',
      '${element.mass}',
      '${element.hair_color}',
      '${element.skin_color}',
      '${element.eye_color}',
      '${element.birth_year}',
      '${element.gender}',
      '${element.created}',
      '${element.edited}',
      '${element.url}'
      );`, (err, rows,) => {
      if(err != null){
        throw err;
      }
  });
})
return res.send('Ok')
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