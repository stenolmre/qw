import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const DemoSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7)
  },
  name: {
    type: String
  }
}, {
  timestamps: true
})

const Demo = mongoose.models.Demo || mongoose.model('Demo', DemoSchema)

export default Demo
