import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  return <div>Bag items</div>;
};

export default CartItem;
