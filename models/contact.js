import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ContactSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7)
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default Contact
