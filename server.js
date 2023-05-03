const express = require('express')
const app = express()
const port = 3000

// configuraciones del servidor
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views") // todas las vistas estarán en la carpeta views


// traernos la data de las lecciones
const allLessons = require("./data/lessons-data.js")

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

// ruta para mostrar todas las lecciones al cliente
app.get("/lessons/all", (req, res) => {

  // renderizar una vista
  // pasarle las lecciones a la vista
  console.log(allLessons)

  res.render("all-lessons.hbs", {
    lessons: allLessons
  })

})

// ruta para mostrar unicamente las lecciones aprobadas
app.get("/lessons/approved", (req, res) => {
  
  const filterArr = [];

  allLessons.forEach((eachLesson) => {
    if (eachLesson.approved === true) {
      filterArr.push(eachLesson)
    }
  })

  // const filterArr = allLessons.filter((eachLesson) => eachLesson.approved === true)

  res.render("approved-lessons.hbs", {
    lessons: filterArr
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// pasos para crear rutas

// 1. crear la ruta sin nada adentro
// 2. creamos una vista con una estructura base (sin contenido)
// 3. renderizamos esta vista en la ruta y la probamos
// 4. buscar la data y pasarla a la vista
// 5. renderizar la data en el hbs