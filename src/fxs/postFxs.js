// import React, { forwardRef } from "react";
// import "../sass/Post.scss";
// import { Avatar } from "@material-ui/core";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishIcon from "@material-ui/icons/Publish";
// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://twitter154.p.rapidapi.com/user/details",
//   params: {
//     username: "omarmhaimdat",
//     user_id: "96479162",
//   },
//   headers: {
//     "X-RapidAPI-Key": "edd5784d3emsh13987b38c01438cp175989jsn1089ccb43ec1",
//     "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
//   },
// };

// async function getData() {
//   try {
//     const response = await axios.request(options);
//     const result = response.data;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData();

// const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               {/* <h3 className="post__title">
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && <VerifiedUserIcon className="post__badge" />} @
//                   {username}
//                 </span>
//               </h3> */}
//               <h3 className="post__title">
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified ? (
//                     <VerifiedUserIcon className="post__badge" />
//                   ) : null}{" "}
//                   @{username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           <img
//             className="avatarimg"
//             src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
//             alt="image"
//           />
//           <img className="avatarimg" src={image} alt="image" />
//           {getData && (
//             <div>
//               {/* Render data from API */}
//               <p>User ID: {getData.user_id}</p>
//               <p>Other Data: {getData.some_other_field}</p>
//             </div>
//           )}
//           ;
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// export default Post;

// import React, { forwardRef, useEffect, useState } from "react";
// import { Avatar } from "@material-ui/core";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishIcon from "@material-ui/icons/Publish";
// import axios from "axios";
// import "../sass/Post.scss";
// import tochka from "../images/icon/tochka.svg";

// const options = {
//   method: "GET",
//   url: "https://twitter154.p.rapidapi.com/user/details",
//   params: {
//     username: "omarmhaimdat",
//     user_id: "96479162",
//   },
//   headers: {
//     "X-RapidAPI-Key": "edd5784d3emsh13987b38c01438cp175989jsn1089ccb43ec1",
//     "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
//   },
// };

// const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
//     const [apiData, setApiData] = useState(null);
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const response = await axios.request(options);
//           const result = response.data;
//           setApiData(result);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       fetchData();
//     }, []);

//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           {/* <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3 className="post__title">
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified ? (
//                     <VerifiedUserIcon className="post__badge" />
//                   ) : null}{" "}
//                   @{username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           <img
//             className="avatarimg"
//             src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
//             alt="image"
//           />
//           <img className="avatarimg" src={image} alt="image" /> */}

//           {apiData && (
//             <>
//               <div className="userContainer">
//                 <img src={apiData.profile_pic_url} />
//                 <div className="userContainer__userBox">
//                   <span className="userContainer__userInfo">
//                     <h4> {apiData.name}</h4>
//                     <p>@{apiData.username}</p>
//                   </span>
//                   <img src={tochka} />
//                 </div>
//               </div>
//               <div className="boxText">
//                 <p>{apiData.description}</p>
//               </div>
//             </>
//           )}
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// export default Post;
