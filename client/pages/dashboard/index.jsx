import styles from "./dashboard.module.css";
import { useState } from "react";
import Link from "next/link";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("You are not logged in.");

  return (
    <div className={styles.dashboardWrapper}>
      <section className={styles.sideMenuContainer}>
        <ul className={styles.sideMenuListItems}>
          <li>Overview</li>
          <li>Financial</li>
          <li>Properties</li>
        </ul>
      </section>
      <section className={styles.bodyContainer}>
        <div className={styles.dashboardHeader}>dashboard header</div>

        <div className={styles.dashboardContent}>
          <div className={styles.cardContainerUpper}>
            <div className={`${styles.upperCard1}`}>asdfs</div>
            <div className={`${styles.upperCard2}`}>asdfs</div>
          </div>
          <div className={styles.cardContainerLower}>
            <div className={`${styles.lowerCard}`}>asdfs</div>
            <div className={`${styles.lowerCard}`}>asdfs</div>
            <div className={`${styles.lowerCard}`}>asdfs</div>
          </div>
        </div>
      </section>
    </div>
  );
}
