import connectDB from '@/utils/connectDB'
import Feedback from '@/models/feedback'

connectDB()

export default async function (req, res) {
  try {
    const _feedback = await Feedback.find().sort({ createdAt: -1 })

    res.send(_feedback)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
