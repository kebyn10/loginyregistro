const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

// ruta (metodos: get y post)
app.get('/', (req, res) => {
  res.send('pagina floristeria')
})
app.post('/register', (req, res) => {
  let name=req.body.name;
  let password=req.body.password;
  let numero=req.body.numero;
  let identificacion=req.body.identificacion;
  let email=req.body.email;


  res.send(`se ha registrado`)
})
app.post('/login', (req, res) => {
  let email=req.body.email;
  let password=req.body.password;

  res.send(`se ha registrado login`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})