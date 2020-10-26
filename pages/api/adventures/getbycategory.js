import connectDB from './../../../utils/connectDB'
import Adventure from './../../../models/adventure'

connectDB()

export default async function (req, res) {
  const { category } = req.query

  try {
    const adventures = await Adventure.find({ type: category }).sort({ createdAt: -1 })

    if (!adventures) return res.status(404).json({ msg: 'Adventures not found.' })

    res.send(adventures)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
