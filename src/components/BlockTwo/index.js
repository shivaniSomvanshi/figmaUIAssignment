import React from "react";
import styles from "./index.module.css";
import Work1 from "../../assets/work1.png";
import Work2Art from "../../assets/work2-art.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png"
import Button from "../../utility/button";


function index(props) {
  return (
    <div className={styles.sectionTwo}>
      <h1 style={{ fontSize: "25px" }}>How it works?</h1>
      <div
        style={{
          width: "575px",
          height: "280px",
          margin: "0% 30%",
          display: "flex",
        }}
      >
        <img src={Work1} alt="Box" className={styles.work1} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: "2%",
            marginTop: " 5%",
          }}
        >
          <p style={{ fontSize: "20px", font: "Roboto", fontWeight: "500" }}>
            Setup your profile & preferences
          </p>
          <p style={{ marginTop: "0%", font: "Roboto" }}>
            Once you create an account, you can start to tell us your likes and
            dislikes so we can tailor the experience just for you.
          </p>
        </div>
      </div>
      {/* ============================================== */}
      <div
        style={{
          width: "575px",
          height: "245px",
          margin: "0% 30%",
          display: "flex",
          flexDirection: "column",
          position:'relative'
        }}
      >
        <img src={Work2Art} alt="Box" className={styles.work2Art} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: "2%",
            marginTop: " 5%",
            width:"60%"
          }}
        >
          <p style={{ fontSize: "20px", font: "Roboto", fontWeight: "500" }}>
          Try it on at home          </p>
          <p style={{ marginTop: "0%", font: "Roboto" }}>
          Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.
          </p>
        </div>
      </div>
      {/* =============================================== */}
      <div
        style={{
          width: "575px",
          height: "280px",
          margin: "0% 30%",
          display: "flex",
        }}
      >
        <img src={Work3} alt="Box" className={styles.work1} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: "2%",
            marginTop: " 5%",
          }}
        >
          <p style={{ fontSize: "20px", font: "Roboto", fontWeight: "500" }}>
            Setup your profile & preferences
          </p>
          <p style={{ marginTop: "0%", font: "Roboto" }}>
            Once you create an account, you can start to tell us your likes and
            dislikes so we can tailor the experience just for you.
          </p>
        </div>
      </div>
      <Button styles={styles.tryButton} text="TRY IT FOR YOURSELF >"/>
    </div>
  );
}

export default index;
