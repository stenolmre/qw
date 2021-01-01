const stripe = require("stripe")(`${process.env.STRIPE_SK_TEST}`);

export default async function (req, res) {
  const { id, amount, email, description } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'EUR',
      description: description,
      payment_method: id,
      receipt_email: email,
      confirm: true
    });

    res.status(200).send({
      payment
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
}
