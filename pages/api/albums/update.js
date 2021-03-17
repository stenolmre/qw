import connectDB from './../../../utils/connectDB'
import Album from './../../../models/album'

connectDB()

export default async function add(req, res) {
  const { id } = req.query
  const { category, name, nimi, location, asukoht, info, infoEst, thumbnails, images, socialimage } = req.body

  if (!category || !name || !nimi || !location || !info || !infoEst || !thumbnails || !images || !socialimage) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  let fields = {}
  if (category) fields.category = category
  if (name) fields.name = name
  if (nimi) fields.nimi = nimi
  if (location) fields.location = location
  if (info) fields.info = info
  if (infoEst) fields.infoEst = infoEst
  if (thumbnails) fields.thumbnails = thumbnails
  if (images) fields.images = images
  if (socialimage) fields.socialimage = socialimage

  try {
    let edit_album = await Album.findById(id)

    if (edit_album) {
      edit_album = await Album.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const albums = await Album.find()

      return res.send(albums)
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
