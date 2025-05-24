import { Router } from 'express';
import { UserModel } from '../dao/models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ status: 'success', users });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

export default router;