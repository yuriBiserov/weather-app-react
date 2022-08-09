import styles from "./Background.module.css";

function Background(props) {
  return (
    <div className={styles.popBackground} onClick={props.closeWindowFunc} />
  );
}

export default Background;
