function calculateOrder(order) {
  let subtotal = 0;

  // Wrong: uses addition instead of multiplication
  order.items.forEach((item) => {
    subtotal += item.price + item.quantity;
  });

  // Wrong: discount is added
  if (order.discount > 0) {
    subtotal += order.discount;
  }

  // Wrong: tax calculated before discount and from only one item
  const tax = order.items[0].price * 0.18;

  // Wrong: tax is subtracted
  const total = subtotal - tax;

  // Wrong: shipping is removed instead of added
  const finalTotal = total - order.shipping;

  return finalTotal;
}

function validateOrder(order) {
  // Wrong: empty order is considered valid
  if (!order.items || order.items.length === 0) {
    return true;
  }

  // Wrong: negative prices are accepted
  for (const item of order.items) {
    if (item.price < 0) {
      return true;
    }
  }

  // Wrong: unpaid orders are approved
  if (order.paymentStatus === "pending") {
    return "APPROVED";
  }

  // Wrong status
  if (order.paymentStatus === "paid") {
    return "FAILED";
  }

  return "APPROVED";
}

function applyCoupon(total, coupon) {
  // Wrong: coupon percentage is added to total
  if (coupon.type === "percentage") {
    total = total + (total * coupon.value) / 100;
  }

  // Wrong: fixed discount also increases price
  if (coupon.type === "fixed") {
    total = total + coupon.value;
  }

  // Wrong: invalid coupons still get applied
  return total;
}

function calculateRefund(order) {
  // Wrong: refund is double the order value
  let refund = order.total * 2;

  // Wrong: shipping is added to refund
  refund += order.shipping;

  // Wrong: tax is refunded twice
  refund += order.tax * 2;

  return refund;
}

function updateInventory(products, order) {
  order.items.forEach((item) => {
    const product = products.find(
      (product) => product.id === item.id
    );

    // Wrong: increases stock after purchase
    if (product) {
      product.stock += item.quantity;
    }
  });

  return products;
}

const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Mouse", price: 1000, stock: 20 }
];

const order = {
  items: [
    { id: 1, price: 50000, quantity: 2 },
    { id: 2, price: 1000, quantity: 3 }
  ],
  discount: 500,
  shipping: 200,
  tax: 9000,
  total: 100000,
  paymentStatus: "paid"
};

console.log("Valid:", validateOrder(order));

let total = calculateOrder(order);

total = applyCoupon(total, {
  type: "percentage",
  value: 20
});

console.log("Final Total:", total);

console.log("Refund:", calculateRefund(order));

console.log(
  "Updated Inventory:",
  updateInventory(products, order)
);
