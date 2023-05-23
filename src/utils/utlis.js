const billAmountHandler = (cart) => cart.reduce((acc, curr) => acc + (curr.qty * Number(curr.price)),0);

export {
  billAmountHandler
}