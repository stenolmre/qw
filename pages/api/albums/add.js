import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function add(req, res) {
  const { category, name, nimi, location, asukoht, info, infoEst, thumbnails, images, socialimage } = req.body

  if (!category || !name || !nimi || !location || !info || !infoEst || !thumbnails || !images || !socialimage) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const album = new Album(req.body)

    await album.save()

    res.send(album)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
