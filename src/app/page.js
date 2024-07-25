import Image from "next/image";
import cs from "classnames";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Section2 from "./components/Section2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/monolog-logo.png"
        height={45}
        width={192}
        alt="monolog"
        style={{ marginLeft: 45 }}
      />
      <div style={{ height: 96 }} />
      <div className={styles.section1}>
        <div className="col" style={{ marginRight: 64, width: 675 }}>
          <h2>
            Voice Notes
            <br />
            from the Future
          </h2>
          <div style={{ height: 10 }} />
          <p className={inter.className}>
            Monolog is an AI voice notes app designed for wide-eyed creatives.
            Generate a quality first draft for{" "}
            <b>any kind of high level creative output</b>, just from an audio
            file.
          </p>
          <div style={{ height: 20 }} />
          <WaitlistButton />
        </div>
        <Image
          src="/index-diagram.svg"
          height={512}
          width={512}
          alt="graphic depicting the monolog app"
          style={{
            marginTop: -10,
            // marginBottom: "auto",
          }}
        />
      </div>
      <div style={{ height: 252 }} />
      <Section2 />
      <div style={{ height: 252 }} />
    </main>
  );
}

const RigthArrow = () => (
  <svg
    width="38"
    height="16"
    viewBox="0 0 38 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.7778 9.77782C37.2074 9.34824 37.2074 8.65176 36.7778 8.22219L29.7775 1.22183C29.3479 0.792251 28.6514 0.792251 28.2218 1.22183C27.7922 1.6514 27.7922 2.34789 28.2218 2.77746L34.4444 9L28.2218 15.2225C27.7922 15.6521 27.7922 16.3486 28.2218 16.7782C28.6514 17.2078 29.3479 17.2078 29.7775 16.7782L36.7778 9.77782ZM-1.13698e-07 10.1L36 10.1L36 7.9L1.13698e-07 7.9L-1.13698e-07 10.1Z"
      fill="black"
    />
  </svg>
);

function WaitlistButton() {
  return (
    <button
      className={cs("flexbutton", styles.waitlistbutton, inter.className)}
    >
      <span>Join Waitlist</span>
      <RigthArrow />
    </button>
  );
}
