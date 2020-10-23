import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { postId } = req.query
  const { comment } = req.body

  if (!comment) return res.status(401).json({ msg: 'Comment is required.' })

  try {
    const post = await Post.findById(postId)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    await post.comments.unshift(req.body)

    await post.save()

    res.send(post.comments)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
