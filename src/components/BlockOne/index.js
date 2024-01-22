import React from "react";
import Button from "../../utility/button";
import styles from "./index.module.css";
import Box from "../../assets/box.png";
import BoxArt from "../../assets/box-art.png";

function index(props) {
  return (
    <div
      className={styles.sectionOne}
    >
      <div className={styles.descriptionBox}>
        <h1>Look good without leaving your house.</h1>
        <p style={{ fontSize: "16px" }}>
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <Button styles={styles.signUpButton} text="SING UP >" />
      </div>
      <img src={Box} alt="Box" className={styles.box} />
      <img src={BoxArt} alt="Box" className={styles.boxArt} />
    </div>
  );
}

export default index;
