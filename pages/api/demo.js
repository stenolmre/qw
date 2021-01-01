import connectDB from './../../utils/connectDB'
import Demo from './../../models/demo'

connectDB()

export default async function add(req, res) {
  const { name } = req.body

  if (!name) return res.status(401).json({ msg: 'Please add correct name.' })

  try {
    const demo = new Demo(req.body)

    await demo.save()

    res.send(demo)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
