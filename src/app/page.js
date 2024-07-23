import localFont from "next/font/local";
import Image from "next/image";
import styles from "./page.module.css";

const avenirNext = localFont({
  src: [
    {
      path: "./fonts/avenir-next-medium.tff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/avenir-next-demi.tff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/avenir-next-bold.tff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={avenirNext.className}>Voice Notes from the Future</h2>
    </main>
  );
}
