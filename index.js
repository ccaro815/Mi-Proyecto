import express from "express";

const app = express();

const PORT = 3000;

const tarea = [
  {
    "id": 1,
    "titulo": "Preparar presentación",
    "descripcion": "Crear la presentación para la reunión del l",
    "fechaVencimiento": "2024-10-20T18:30:00Z",
    "estado": {
      "pendiente": true,
      "enCurso": false,
      "finalizada": false
    }
  }
];

app.get("/Tareas", (req, res) => {
  //Logica Tarea
  res.json(tarea);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
