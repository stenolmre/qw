import connectDB from './../../utils/connectDB';

connectDB();

export default async (req, res) => {
  res.json({ test: 'test' });
}
