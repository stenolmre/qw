import connectDB from './../../../utils/connectDB'
import Adventure from './../../../models/adventure'

connectDB()

export default async function (req, res) {
  const { adventureId } = req.query

  try {
    const adventure = await Adventure.findById(adventureId)

    if (!adventure) return res.status(404).json({ msg: 'Adventure not found.' })

    res.send(adventure)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
