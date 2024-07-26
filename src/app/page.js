import Image from "next/image";
import cs from "classnames";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Section2 from "./components/Section2";
import DiagramImg from "/public/index-diagram.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/monolog-logo.png"
        height={45}
        width={192}
        alt="monolog"
        className={styles.logo}
        style={{ marginLeft: 45 }}
      />
      <div style={{ height: 96 }} className="desktoponly" />
      <div className={styles.section1}>
        <div
          className={cs("col", styles.section1col)}
          style={{ marginRight: 50, width: 690 }}
        >
          <h2 className="desktoponly">
            Voice Notes
            <br />
            from the Future
          </h2>
          <p className={inter.className}>
            Monolog is an AI voice notes app designed for wide-eyed creatives.
            Generate a quality first draft for{" "}
            <b>any kind of high level creative output</b>, just from an audio
            file.
          </p>
          <div style={{ height: 20 }} className="desktoponly" />
          <div style={{ height: 14 }} className="mobileonly" />
          <WaitlistButton />
        </div>
        <Image
          src={DiagramImg}
          height={512}
          width={512}
          alt="graphic depicting the monolog app"
          style={{
            marginTop: -10,
            // marginBottom: "auto",
          }}
        />
        <h2 className="mobileonly">
          Voice Notes
          <br />
          from the Future
        </h2>
      </div>
      <Section2 />
      <div style={{ height: 300 }} className="desktoponly" />
      <div style={{ height: 200 }} className="mobileonly" />
      <div
        className="col"
        style={{ maxWidth: 800, margin: "auto", alignItems: "center" }}
      >
        <h3
          className="mobileonly"
          style={{
            fontFamily: "avenir-next-medium",
            fontSize: 36,
            textAlign: "center",
            color: "#5157E2",
            lineHeight: "135%",
            fontWeight: "500",
            margin: "0 2vw",
          }}
        >
          Get Notified When We Launch
        </h3>
        <h3
          className="desktoponly"
          style={{
            fontFamily: "avenir-next-medium",
            fontSize: 48,
            textAlign: "center",
            color: "#5157E2",
            lineHeight: "135%",
            fontWeight: "600",
          }}
        >
          Get Notified When We Launch
        </h3>
        <div style={{ height: 44 }} />
        <WaitlistButton />
      </div>
      <div style={{ height: 120 }} />
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
    <Link
      href="https://forms.gle/fgiGq2fJfYc3nsQN6"
      target="_blank"
      className={cs("flexbutton", styles.waitlistbutton, inter.className)}
    >
      <span>Join Waitlist</span>
      <RigthArrow />
    </Link>
  );
}
