import styles from "./NotFound.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Not Found :(</h1>
      <br />
      <p className={styles.description}>
        Unfortunately, there is no such page...{" "}
      </p>
    </div>
  );
};

export default NotFoundBlock;
