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
  nimi: {
    type: String,
    required: true
  },
  prices: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  availability: {
    disabledDays: [{
      year: {
        type: Number,
        required: true
      },
      month: {
        type: Number,
        required: true
      },
      day: {
        type: Number,
        required: true
      }
    }],
    time: {
      type: Array,
      required: true
    }
  },
  levelOfDifficulty: {
    type: String,
    required: true
  },
  raskusaste: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  isIncluded: {
    type: Array,
    required: true
  },
  hinnas: {
    type: Array,
    required: true
  },
  isRequired: {
    type: Array,
    required: true
  },
  nõudmised: {
    type: Array,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  kirjeldus: {
    type: String,
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
    }
  },
  images: {
    type: Array,
    required: true
  },
  socialimage: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Adventure = mongoose.models.Adventure || mongoose.model('Adventure', AdventureSchema)

export default Adventure
