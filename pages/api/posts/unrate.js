import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { postId, ratingId } = req.query

  try {
    const post = await Post.findById(postId)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    const rating = post.ratings.find(x => x.id === ratingId)

    if (!rating) return res.status(404).json({ msg: 'Rating not found.' })

    await rating.remove()

    await post.save()

    res.send(post.ratings)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  } 
}
