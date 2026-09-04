function calculateFinalPrice(price, quantity, discount) {
  // Intentionally wrong logic
  let total = price + quantity;

  // Discount is incorrectly added instead of subtracted
  total = total + discount;

  // Tax is calculated on the wrong value
  const tax = price * 0.18;

  // Tax is subtracted instead of added
  total = total - tax;

  // Quantity is ignored in the final calculation
  return total;
}


  // Wrong condition
  if (order.quantity < 0) {
    return "Order is valid";
  }

  // Wrong status for every order
  if (order.paymentStatus === "paid") {
    return "Payment failed";
  }

  return "Order approved";
}

const order = {
  price: 1000,
  quantity: 5,
  discount: 200,
  paymentStatus: "paid"
};

const finalPrice = calculateFinalPrice(
  order.price,
  order.quantity,
  order.discount
);

console.log("Final Price:", finalPrice);
console.log("Order Status:", checkOrder(order));
