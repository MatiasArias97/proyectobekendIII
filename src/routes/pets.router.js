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

export default router;