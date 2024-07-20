import Password from '../models/passwordModel.js';

export const getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ creator: req.userId });
    res.status(200).json(passwords);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPassword = async (req, res) => {
  const password = req.body;

  const newPassword = new Password({ ...password, creator: req.userId, createdAt: new Date().toISOString() });

  try {
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { title, username, password } = req.body;

  try {
    const updatedPassword = { title, username, password, _id: id };
    await Password.findByIdAndUpdate(id, updatedPassword, { new: true });
    res.json(updatedPassword);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePassword = async (req, res) => {
  const { id } = req.params;

  try {
    await Password.findByIdAndRemove(id);
    res.json({ message: 'Password deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

