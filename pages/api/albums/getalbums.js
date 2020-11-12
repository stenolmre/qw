import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function (req, res) {
  try {
    const albums = await Album.find().sort({ name: 1 })

    if (!albums) return res.status(404).json({ msg: 'Albums not found.' })

    res.send(albums)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
