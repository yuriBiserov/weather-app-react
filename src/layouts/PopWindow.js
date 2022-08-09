import styles from "./PopWindow.module.css";

function PopWindow(props) {
  return props.trigger ? (
    <div className={styles.popWindow}>
      <div className={styles.popResult}>
        <h2>{props.popMessage}</h2>
      </div>
      <button
        className={styles.okButton}
        onClick={() => props.setTrigger(false)}
      >
        OK
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default PopWindow;
