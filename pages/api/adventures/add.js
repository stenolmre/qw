import connectDB from './../../../utils/connectDB'
import Adventure from './../../../models/adventure'

connectDB()

export default async function add(req, res) {
  const { type, name, prices, availability, levelOfDifficulty, isIncluded, duration, hashtags, description, isRequired, location, images } = req.body

  if (!type || !name || !prices || !availability || !levelOfDifficulty || !isIncluded || !duration || !hashtags || !description || !isRequired || !location || !images) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const adventure = new Adventure(req.body)

    await adventure.save()

    res.send(adventure)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
