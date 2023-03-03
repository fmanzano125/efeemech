import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.btnLogin}>
      <a href="">
        (0)
        <img
          id="imgCarrito"
          src="https://static.vecteezy.com/system/resources/previews/002/238/646/original/isolated-of-shopping-cart-icon-basket-symbol-eps10-free-vector.jpg"
        />
      </a>
    </div>
  );
};

export default CartWidget;
