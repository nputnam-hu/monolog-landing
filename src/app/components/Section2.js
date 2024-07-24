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
              takes care of the rest.
            </p>
          </div>
          <Image
            src="/ss1.png"
            height={513}
            width={712}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
        <div style={{ height: 280 }} />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3>Your Ideas & Insights, Scaffolded by AI</h3>
            <p>
              Unlike most AI writing tools that rely largely on short
              instruction prompts to generate text, Monolog pulls in a large
              amount of rich context and content directly from the audio note
              that you upload.
            </p>
            <br />
            <p>
              We extract key themes, ideas, and terminology from your audio to
              inform our generations and give you control over how the AI uses
              that content. This model allows our AI system to generate cogent,
              slop-free writing in your own voice.
            </p>
          </div>
          <Image
            src="/ss2.png"
            height={501.5}
            width={696}
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
            height={501.5}
            width={696}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
