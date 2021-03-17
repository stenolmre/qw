import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const FeedbackSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7)
  },
  name: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema)

export default Feedback
