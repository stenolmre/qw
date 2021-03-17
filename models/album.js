import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const AlbumSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7)
  },
  category: {
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
  location: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  infoEst: {
    type: String,
    required: true
  },
  thumbnails: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  socialimage: {
    type: String,
    required: true
  },
  ratings: [
    {
      rating: {
        type: Number,
        required: true
      }
    }
  ],
  comments: [
    {
      comment: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
})

const Album = mongoose.models.Album || mongoose.model('Album', AlbumSchema)

export default Album
