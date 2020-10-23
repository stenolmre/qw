import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { postId } = req.query
  const { image, name, content, category, author } = req.body

  if (!image || !name || !content || !category || !author) return res.status(401).json({ msg: 'Please fill all the fields with correct information.' })

  try {
    const post = await Post.findByIdAndUpdate(postId, req.body, { new: true })

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    await post.save()

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
