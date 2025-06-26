import { AdoptionModel } from "../dao/models/adoption.model.js";

export const createAdoption = async (req, res) => {
  try {
    const { user, pet } = req.body;
    const newAdoption = await AdoptionModel.create({ user, pet });
    res.status(201).json({ status: "success", payload: newAdoption });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await AdoptionModel.find().populate("user").populate("pet");
    res.json({ status: "success", payload: adoptions });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};