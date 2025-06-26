import { Router } from 'express';
import  PetModel  from '../dao/models/pet.model.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json({ status: 'success', pets });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});
// POST: Crear una nueva mascota
router.post('/', async (req, res) => {
  try {
    const newPet = await PetModel.create(req.body);
    res.status(201).json({ status: 'success', payload: newPet });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

export default router;