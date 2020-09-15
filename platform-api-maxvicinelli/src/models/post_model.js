import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field

const PostSchema = new Schema({
  title: { type: String },
  tags: { type: String },
  content: { type: String },
  coverUrl: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// create PostModel class from schema

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
