import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// VERSION 1 Process stripe payments => /api/v1/payment/process
/*
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    metadata: { integration_check: "accept_a_payment" },
  });
  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});
*/

// VERSION 2 Create stripe checkout session => /api/v1/payment/checkout_session

export const stripeCheckoutSession = catchAsyncErrors(
  async (req, res, next) => {
    const body = req?.body;

    const line_items = body?.orderItems?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item?.name,
            images: [item?.image],
            metadata: { productId: item?.product },
          },
          unit_amount: item?.price * 100,
        },
        tax_rates: ["txr_1O0RlnLHsr0LAgoeXHfRlAqh"],
        quantity: item?.quantity,
      };
    });

    const shipping_rate =
      body?.itemsPrice >= 50
        ? "shr_1O0RbaLHsr0LAgoeRbqSuuT6"
        : "shr_1O0ReLLHsr0LAgoeIE6uJuBN";

    const session = await stripe.checkout.session.create({
      payment_method_types: ["card"],
      success_url: `${process.env.FRONTEND_URL}/me/orders`,
      cancel_url: `${process.env.FRONTEND_URL}`,
      customer_email: req?.user?.email,
      client_reference_id: req?.user?._id?.toString(),
      mode: "payment",
      shipping_options: [{ shipping_rate }],
      line_items,
    });

    res.status(200).json({
      url: session.url,
    });
  }
);

// Send stripe API key => /api/v1/stripeapi
// exports.sendStripeApi = catchAsyncErrors(async (req, res, next) => {
//   res.status(200).json({
//     stripeApiKey: process.env.STRIPE_API_KEY,
//   });
// });
