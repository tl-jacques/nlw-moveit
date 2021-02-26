import styles from "./Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/70864915?s=400&u=c94f9a9cb0149f8f3d249ffaa43dd51a08d31e91&v=4"
        alt="Thiago Linhares"
      />
      <div>
        <strong>Thiago Linhares</strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>Level 1
        </p>
      </div>
    </div>
  );
}
