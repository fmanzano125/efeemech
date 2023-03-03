import React from "react";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ get }) => {
  return <div className={styles.itemListContainer}>{get}</div>;
};

export default ItemListContainer;
