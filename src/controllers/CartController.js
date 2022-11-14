const Cart = require("../models/Cart");

exports.store = async (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((err, userCart) => {
    if (err) return res.status(400).json(err);
    if (userCart) {
      // if cart exist update cart by quantity
      const product = req.body.cartItems.product;
      const productExist = userCart.cartItems.find((c) => c.product.toString() === product);

      if (productExist) {
        Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              cartItems: {
                ...req.body.cartItems,
                quantity: productExist.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((err, _cart) => (err ? res.status(200).json(err) : res.status(200).json(_cart)));
      } else {
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((err, _cart) => (err ? res.status(200).json(err) : res.status(200).json(_cart)));
      }
    } else {
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      cart.save((err, cart) => (err ? res.status(400).json(err) : res.status(200).json({ newCart: cart })));
    }
  });
};
