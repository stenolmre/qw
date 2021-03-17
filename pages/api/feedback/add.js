import connectDB from '@/utils/connectDB'
import Feedback from '@/models/feedback'

connectDB()

export default async function (req, res) {
  const { name, feedback, rating } = req.body

  if (!name || !feedback || !rating) return res.status(401).json({ msg: 'All fields are required.' })

  try {
    const feedback = new Feedback(req.body)

    await feedback.save()

    const _feedback = await Feedback.find().sort({ createdAt: -1 })

    res.send(_feedback)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
