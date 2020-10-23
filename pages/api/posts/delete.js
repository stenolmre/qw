import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { postId } = req.query

  try {
    const post = await Post.findById(postId)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    post.remove()

    res.json({ msg: 'Successfully removed.' })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
