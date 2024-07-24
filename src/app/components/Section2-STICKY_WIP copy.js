// import { useEffect, useState } from "react";
// import cs from "classnames";
// import useScrollPosition from "@react-hook/window-scroll";
// import styles from "../page.module.css";
// import Image from "next/image";

// // const SECTION_ID = "section2";
// const CARD1_ID = "card1";
// const CARD2_ID = "card2";
// const CARD3_ID = "card3";

// const SECTION_HEIGHT = 2000;

// const Section2 = () => {
//   const scrollY = useScrollPosition(120);
//   const [card1Top, setCard1Top] = useState();
//   const [card2Top, setCard2Top] = useState();
//   const [card3Top, setCard3Top] = useState();

//   const isCard3Visible = scrollY > card3Top;
//   const isCard2Visible = !isCard3Visible && scrollY > card2Top;
//   const isCard1Visible = !isCard2Visible && !isCard3Visible;

//   useEffect(() => {
//     const _setOffsets = () => {
//       const _section2Top =
//         document.getElementById(CARD1_ID)?.offsetTop +
//         document.getElementById(CARD1_ID)?.offsetParent?.offsetTop -
//         0.95 * window.innerHeight;
//       const _section3Top =
//         document.getElementById(CARD2_ID)?.offsetTop +
//         document.getElementById(CARD2_ID)?.offsetParent?.offsetTop -
//         0.95 * window.innerHeight;
//       const _section4Top =
//         document.getElementById(CARD3_ID)?.offsetTop +
//         document.getElementById(CARD3_ID)?.offsetParent?.offsetTop -
//         0.95 * window.innerHeight;
//       setCard1Top(_section2Top);
//       setCard2Top(_section3Top);
//       setCard3Top(_section4Top);
//     };
//     setTimeout(_setOffsets, 100);
//     window.addEventListener("resize", _setOffsets);
//     return () => window.removeEventListener("resize", _setOffsets);
//   }, []);

//   return (
//     <div className={styles.section2}>
//       <div className="col">
//         <div className={styles.section2__card}>
//           <h3>From Speech to Spark</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <br />
//           <p>
//             Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum
//           </p>
//         </div>
//         <div style={{ height: 252 }} />
//         <div className={styles.section2__card}>
//           <h3>Your Ideas & Insights, Scaffolded by AI</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <br />
//           <p>
//             Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum
//           </p>
//         </div>
//         <div style={{ height: 252 }} />
//         <div className={styles.section2__card}>
//           <h3>Chat, Edit, Iterate</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <br />
//           <p>
//             Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum
//           </p>
//         </div>
//       </div>
//       <div
//         className={styles.screenshotwrapper}
//         style={{
//           height: SECTION_HEIGHT - 700,
//           position: "relative",
//           width: 0,
//         }}
//       >
//         <div className={cs(styles.stickyscreenshots)}>
//           <div style={{ position: "absolute" }} className={styles.row}>
//             <Image
//               src={PeopleSS1}
//               alt="Screenshot of monolog"
//               width={342}
//               height={700}
//               style={{
//                 opacity:
//                   screenWidth > 1300
//                     ? !isMusicVisible
//                       ? 1
//                       : 0
//                     : isGenScreenshotOneVisible
//                     ? 1
//                     : 0,
//                 // transition: "opacity .5s ease-in",
//               }}
//               className={styles.screenshot}
//             />
//             <div style={{ width: 16 }} />
//             <Image
//               src={PeopleSS2}
//               alt="Screenshot of a people vibe in a mobile app"
//               width={342}
//               height={700}
//               style={{
//                 opacity:
//                   screenWidth > 1300
//                     ? !isMusicVisible
//                       ? 1
//                       : 0
//                     : isGenScreenshotTwoVisible
//                     ? 1
//                     : 0,
//                 // transition: "opacity .5s ease-in",
//               }}
//               className={styles.screenshot}
//             />
//           </div>
//           <div
//             style={{
//               position: "absolute",
//             }}
//             className={styles.row}
//           >
//             <Image
//               src={MusicSS1}
//               alt="Screenshot of a music vibe in a mobile app"
//               width={342}
//               height={700}
//               style={{
//                 opacity:
//                   screenWidth > 1300
//                     ? isMusicVisible
//                       ? 1
//                       : 0
//                     : isMusicScreenshotTwoVisible
//                     ? 1
//                     : 0,
//               }}
//               className={styles.screenshot}
//             />
//             <div style={{ width: 16 }} />
//             <Image
//               src={MusicSS2}
//               alt="Screenshot of a music vibe in a mobile app"
//               width={342}
//               height={700}
//               style={{
//                 opacity:
//                   screenWidth > 1300
//                     ? isMusicVisible
//                       ? 1
//                       : 0
//                     : isMusicScreenshotOneVisible
//                     ? 1
//                     : 0,
//               }}
//               className={styles.screenshot}
//             />
//           </div>
//           <div
//             style={{
//               position: "absolute",
//             }}
//             className={styles.row}
//           >
//             <div
//               className={styles.screenshotbg}
//               style={{
//                 width: 334,
//                 height: 700,
//                 background: "#1a1a1a",
//                 marginBottom: "auto",
//                 zIndex: -1,
//                 borderRadius: 60,
//                 marginLeft: 4,
//               }}
//             />
//             <div style={{ width: 16 }} />
//             <div
//               className={styles.screenshotbg2}
//               style={{
//                 width: 334,
//                 height: 700,
//                 background: "#1a1a1a",
//                 marginBottom: "auto",
//                 zIndex: -1,
//                 borderRadius: 60,
//                 marginLeft: 4,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section2;
