import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: { type: String },
  body: { type: String },
  url: {type: String, unique: true},
  createdAt: { type: Date, default: Date.now() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Post', PostSchema);
