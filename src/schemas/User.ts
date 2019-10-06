import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: 'Email is required',
    unique: true
  },
  fullname: {
    type: String,
    required: 'Fullname is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

export default User;