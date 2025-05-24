import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: { type: String, required: true, unique: true }, 
  email: { type: String, required: true, unique: true },
  password: String,
  role: String,
  pets: Array
});

export const UserModel = mongoose.model('User', userSchema);