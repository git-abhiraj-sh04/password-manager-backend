import mongoose from 'mongoose';

const passwordSchema = mongoose.Schema({
  title: String,
  username: String,
  password: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Password = mongoose.model('Password', passwordSchema);

export default Password;

