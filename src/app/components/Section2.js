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
              Voice is an incredibly powerful tool for crafting and refining new
              ideas, but software voice memos on their own are unable to unlock
              that potential. To enable true ideation we need more than just
              software that listens to us—we need software that{" "}
              <em>talks back</em>.
            </p>
            <br />
            <p>
              Enter Monolog. Our platform takes in your unfiltered speech and
              automatically transcribes and transforms it into a dynamic
              document, engineered to kickstart your creative process. All you
              need to do is ramble your thoughts into a microphone and our AI
              will take care of the rest.
            </p>
          </div>
          <Image
            src="/ss1.png"
            height={498}
            width={692}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
        <div style={{ height: 280 }} />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>Your Ideas & Insights, Scaffolded by AI</h3>
            <p>
              Voice is an incredibly powerful tool for crafting and refining new
              ideas, but software voice memos on their own are unable to unlock
              that potential. To enable true ideation we need more than just
              software that listens to us.
            </p>
            <br />
            <p>
              Enter Monolog. Our platform takes in your unfiltered speech and
              automatically transcribes and transforms it into a dynamic
              document, engineered to kickstart your creative process.
            </p>
          </div>
          <Image
            src="/ss2.png"
            height={498}
            width={692}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
        <div style={{ height: 280 }} />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>Chat, Edit, Iterate</h3>
            <p>
              Voice is an incredibly powerful tool for crafting and refining new
              ideas, but software voice memos on their own are unable to unlock
              that potential. To enable true ideation we need more than just
              software that listens to us—we need software that talks back.
            </p>
            <br />
            <p>
              Enter Monolog. Our platform takes in your unfiltered speech and
              automatically transcribes and transforms it into a dynamic
              document, engineered to kickstart your creative process. Simply
              free associate into a microphone and our AI will take care of the
              rest.
            </p>
          </div>
          <Image
            src="/ss3.png"
            height={498}
            width={692}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
