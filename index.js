const express = require('express');
const app = express();
app.use(express.json());

const tareas = [];

app.post('/tareas', (req, res) => {
    const { id, titulo, descripcion, fechaVencimiento, estado } = req.body;
    if (!id || !titulo || !descripcion || !fechaVencimiento || !estado) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const nuevaTarea = { id, titulo, descripcion, fechaVencimiento, estado };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.get('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
});

app.put('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });

    const { titulo, descripcion, fechaVencimiento, estado } = req.body;
    if (titulo) tarea.titulo = titulo;
    if (descripcion) tarea.descripcion = descripcion;
    if (fechaVencimiento) tarea.fechaVencimiento = fechaVencimiento;
    if (estado) tarea.estado = estado;

    res.json(tarea);
});

app.delete('/tareas/:id', (req, res) => {
    const tareaIndex = tareas.findIndex(t => t.id === parseInt(req.params.id));
    if (tareaIndex === -1) return res.status(404).json({ message: 'Tarea no encontrada' });

    tareas.splice(tareaIndex, 1);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
