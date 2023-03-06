import React from "react";

import styles from "./ECG.module.css";

import { useSelector } from "react-redux";

export default function ECG() {
  // const user = useSelector((state) => state.reducer.user.value);
  // const theme = useSelector((state) => state.reducer.theme.value);

  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  console.log(user);
  console.log(theme);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header} style={{ backgroundColor: theme }}>
        header
      </header>
      <main className={styles.main}>
        <aside className={styles.aside}>aside</aside>
        <section className={styles.contents}>
          <div>Name : {user.name}</div>
          <div>Age: {user.age}</div>
          <div>Email : {user.email}</div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="/">Home</a>
      </footer>
    </div>
  );
}
