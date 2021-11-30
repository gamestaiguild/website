// const TipsModal = (props) => {
//   const { tipsModal, setTipsModal } = props;

//   const expr = "Papayas";
//   let title = "";
//   let content = "";
//   switch (tipsModal.tooltipsText) {
//     case "1":
//       title = "Account Status";
//       content =
//         "Here you’ll be able to: View account status that has been created from your account, manage account status, check rewards && cards details";
//       break;
//     case "2":
//       title = "Game Password";
//       content =
//         "Here you’ll be able to: View any content (like posts, stories, or comments) that has been removed from your account for going against Community Guidelines and may lead to your account being taken down. Learn more about why your content was removed. Access and review our Community Guidelines. Request a review of our decision to remove your content. Learn more about how content you’ve posted that’s been removed can affect your access to your account.";
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }

//   return tipsModal.status ? (
//     <div className="modal" id="modal-one">
//       <div className="modal-content">
//         <div className="account-header">
//           <div className="account-header-intro">
//             <ul className="some-list" style={{ marginTop: 0 }}>
//               <li className="some-list-item">
//                 <div className="account-header">
//                   <div className="account-header-intro">
//                     <div className="section-text">
//                       <p>{title}</p>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="account-header-actions">
//             <span>
//               <label
//                 for="toggle"
//                 style={{ zIndex: 100, paddingTop: 0 }}
//                 onClick={() => {
//                   setTipsModal(false);
//                 }}
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 10.5862L16.95 5.63623L18.364 7.05023L13.414 12.0002L18.364 16.9502L16.95 18.3642L12 13.4142L7.05 18.3642L5.636 16.9502L10.586 12.0002L5.636 7.05023L7.05 5.63623L12 10.5862Z"
//                     fill="#ffff"
//                   />
//                 </svg>

//                 {/* {!expandSection ? "See all" : "Show Less"} */}
//               </label>
//             </span>
//           </div>
//         </div>
//         {content}
//       </div>
//     </div>
//   ) : null;
// };

// export default TipsModal;
