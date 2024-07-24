import cs from "classnames";
import styles from "../page.module.css";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className="col">
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>From Speech to Spark</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          <Image
            src="/ss1.png"
            height={518}
            width={716}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
        <div style={{ height: 320 }} />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>Your Ideas & Insights, Scaffolded by AI</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          <Image
            src="/ss2.png"
            height={518}
            width={716}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
        <div style={{ height: 320 }} />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>Chat, Edit, Iterate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          <Image
            src="/ss3.png"
            height={518}
            width={716}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
