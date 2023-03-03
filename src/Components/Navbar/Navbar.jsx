import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <div id="logo"> EFEEME - Todo en Refrigeración</div>
      <div className={styles.navBarMenuLinks}>
        <a href="">Nosotros</a>
        <a href="">Tienda</a>
        <a href="">Contacto</a>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
