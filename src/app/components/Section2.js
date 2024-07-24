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
              Speech is an incredibly powerful tool for crafting and refining
              new ideas, but computer voice memos on their own are unable to
              unlock that potential. To enable true ideation we need more than
              just software that listens to us—we need software that{" "}
              <em>talks back</em>.
            </p>
            <br />
            <p>
              That is why we built Monolog. Our platform takes in your
              unfiltered speech and automatically transcribes and transforms it
              into a dynamic document, engineered to kickstart your creative
              process. All you need to do is free associate your thoughts into a
              microphone and our AI takes care of the rest.
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
              instruction prompts to generate text, Monolog pulls in a vast
              amount of rich content and context directly from the audio you
              upload to power our creative engine.
            </p>
            <br />
            <p>
              We extract key themes, ideas, and terminology from your voice note
              to inform our generations, and give you control over how the AI
              intereprets and applies that content. With this model, Monolog is
              able to generates cogent, slop-free writing for you in your own
              voice.
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
              Once your document has been generated, you can chat with our AI to
              suggest areas for edits and revisions, identify weak or extraneous
              sections to cut, find new data and topics that strengthen your
              thesis, and more.
            </p>
            <br />
            <p>
              Enter Monolog. Our platform takes in your unfiltered speech and
              automatically transcribes and transforms it into a dynamic
              document, fine-tuned to kickstart your creative process. Simply
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
