// import { useState, useEffect } from "react";
// import Head from "next/head";
// import Script from "next/script";
// import Image from "next/image";
// export default function Profile() {
//   //   ToDo:
//   // Fetch the user the client is requesting
//   const [character, setCharacter] = useState("yoda");

//   useEffect(() => {
//     (async () => {
//       await fetch("/api/getCharacter")
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     })();
//   });

//   return (
//     <>
//       <Head>
//         <title>Profile</title>
//       </Head>
//       {/* <Script
//         src="https://connect.facebook.net/en_US/sdk.js"
//         strategy="lazyOnload"
//         onLoad={() =>
//           console.log(`script loaded correctly, window.FB has been populated`)
//         }
//       /> */}
//       <Image
//         src="/images/profile.jpg" // Route of the image file
//         height={144} // Desired size with correct aspect ratio
//         width={144} // Desired size with correct aspect ratio
//         alt="Your Name"
//       />
//       <h1>{character}</h1>
//     </>
//   );
// }
