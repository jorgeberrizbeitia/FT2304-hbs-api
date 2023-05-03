const express = require('express')
const app = express()
const port = 3000

// configuraciones del servidor
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views") // todas las vistas estarán en la carpeta views

app.get('/', (req, res) => {
  // res.send('Hello World!')

  // cuando trabajamos con plantillas usamos .render()
  res.render("home.hbs")
})

app.get("/patata", (req, res) => {

  let user = {
    username: "sarah",
    age: 22,
    hobbies: ["boxing", "escalar"]
  }

  res.render("about.hbs", user)
  // cuando hacemos render, podemos pasarle data a la vista
  // debemos pasar siempre un Objeto
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})