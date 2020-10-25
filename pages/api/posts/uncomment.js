import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { postId, commentId } = req.query

  try {
    const post = await Post.findById(postId)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    const comment = post.comments.find(x => x.id === commentId)

    if (!comment) return res.status(404).json({ msg: 'Comment not found.' })

    await comment.remove()

    await post.save()

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
