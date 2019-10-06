import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  user_id: Number,
  document_id: Number,
  text: String
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;