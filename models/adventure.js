import mongoose from 'mongoose'

const AdventureSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: {
    time: {
      type: Array,
      required: true
    },
    days: {
      type: Array,
      required: true
    }
  },
  levelOfDifficulty: {
    type: String,
    required: true
  },
  isIncluded: {
    type: Array,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: Array,
    required: true
  },
  location: {
    start: {
      type: String,
      required: true
    },
    finish: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    }
  },
  images: {
    type: Array,
    required: true
  },
  cancellation: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

const Adventure = mongoose.models.Adventure || mongoose.model('Adventure', AdventureSchema)

export default Adventure
