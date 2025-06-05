import styles from "./display.module.css";

const Display = ({ displayValue }) => {
  return  <input  value={displayValue} className={styles.display} type="text" readOnly />;
};

export default Display;
