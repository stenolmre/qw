import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function (req, res) {
  const { albumId } = req.query
  const { comment } = req.body

  if (!comment) return res.status(401).json({ msg: 'Comment is required.' })

  try {
    const album = await Album.findById(albumId)

    if (!album) return res.status(404).json({ msg: 'Album not found.' })

    await album.comments.unshift(req.body)

    await album.save()

    res.send(album)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
