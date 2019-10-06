import mongoose, { Schema } from 'mongoose';

const DocumentSchema = new Schema({
  user_id: Number,
  path: String,
  name: String,
  extension: String,
  size: Number
}, {
  timestamps: true
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;