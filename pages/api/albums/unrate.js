import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function (req, res) {
  const { albumId, ratingId } = req.query

  try {
    const album = await Album.findById(albumId)

    if (!album) return res.status(404).json({ msg: 'Album not found.' })

    const rating = album.ratings.find(x => x.id === ratingId)

    if (!rating) return res.status(404).json({ msg: 'Rating not found.' })

    await rating.remove()

    await album.save()

    res.send(album)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
