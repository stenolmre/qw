import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function add(req, res) {
  const { image, name, content, category, author } = req.body

  if (!image || !name || !content || !category || !author) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const post = new Post(req.body)

    await post.save()

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
