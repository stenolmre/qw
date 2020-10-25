import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function (req, res) {
  const { albumId, commentId } = req.query

  try {
    const album = await Album.findById(albumId)

    if (!album) return res.status(404).json({ msg: 'Album not found.' })

    const comment = album.comments.find(x => x.id === commentId)

    if (!comment) return res.status(404).json({ msg: 'Comment not found.' })

    await comment.remove()

    await album.save()

    res.send(album.comments)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
