const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET: Todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Crear usuario
router.post('/', async (req, res) => {
  try {
    console.log('Datos recibidos en POST /api/usuarios:', req.body); // Log para depuración
    const nuevoUsuario = await User.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Editar usuario por cédula
router.put('/:cedula', async (req, res) => {
  try {
    const [actualizados] = await User.update(req.body, { where: { cedula: req.params.cedula } });
    if (actualizados) {
      const usuarioActualizado = await User.findOne({ where: { cedula: req.params.cedula } });
      res.json(usuarioActualizado);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Eliminar usuario por cédula
router.delete('/:cedula', async (req, res) => {
  try {
    const eliminados = await User.destroy({ where: { cedula: req.params.cedula } });
    if (eliminados) {
      res.json({ mensaje: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
