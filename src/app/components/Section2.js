import cs from "classnames";
import styles from "../page.module.css";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className="col">
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3 className="wideonly">From Speech to Spark</h3>
            <p>
              Speech is an incredibly powerful tool for crafting and refining
              new ideas, but voice memos on their own are unable to unlock that
              potential. To enable true ideation we need more than just software
              that listens to us—we need software that <em>talks back</em>.
            </p>
            <br />
            <p>
              Enter Monolog. Our platform takes in your unfiltered speech and
              automatically transcribes and transforms it into a dynamic
              document, engineered to kickstart your creative process. All you
              need to do is free associate your thoughts into a microphone and
              our AI takes care of the rest.
            </p>
          </div>
          <Image
            src="/ss1.png"
            height={513}
            width={712}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
          <h3 className="narrowonly">From Speech to Spark</h3>
        </div>
        <div style={{ height: 292 }} className="desktoponly" />
        <div style={{ height: 180 }} className="mobileonly" />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3 className="wideonly">
              Your Ideas & Insights, Scaffolded by AI
            </h3>
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
              able to generate cogent, slop-free writing for you, all in your
              own voice.
            </p>
          </div>
          <Image
            src="/ss2.png"
            height={513}
            width={712}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
          <h3 className="narrowonly">
            Your Ideas & Insights,
            <br />
            Scaffolded by AI
          </h3>
        </div>
        <div style={{ height: 292 }} className="desktoponly" />
        <div style={{ height: 180 }} className="mobileonly" />
        <div className={styles.section2__card}>
          <div className={styles.cardcol}>
            <h3 className="wideonly">Chat, Edit, Iterate</h3>
            <p>
              Once your document has been generated, you can chat with our AI to
              suggest areas for edits and revisions, identify extraneous
              sections to cut, find new data and topics that strengthen your
              thesis, and more. As you go further down the process of sculpting
              your work, you can also add new audio to the note to be
              incorporated into the document.
            </p>
            <br />
            <p>
              And finally when you’re ready, you can easily export your voice
              note document into markdown, Google Docs, or Microsoft Word to put
              the finishing touches on your creation and publish it!
            </p>
          </div>
          <Image
            src="/ss3.png"
            height={513}
            width={712}
            alt="screenshot of monolog app"
            className={styles.cardimg}
          />
          <h3 className="narrowonly">Chat, Edit, Iterate</h3>
        </div>
      </div>
    </div>
  );
};

export default Section2;
