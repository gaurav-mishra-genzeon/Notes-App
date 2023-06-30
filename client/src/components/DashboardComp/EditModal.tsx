// import React, { useState } from "react";

// const EditModal = ({
//   edittitle,
//   editsetTitle,
//  editcontent, 
//  editsetContent,
//  editHandler
// }) => {
 
//   // console.log( id,
//   //   title,
//   //   setTitle,
//   //   content,
//   //   setContent,
//   //   updateNote)
//   const inputHandler = (e) => {
//     if (e.target.id === "edittitle") {
//       editsetTitle(e.target.value);
//     } else {
//       editsetContent(e.target.value);
//     }
//   };

//   const editNotesHandler = async (e) => {
//     e.preventDefault();
//     console.log(editcontent,edittitle);
//     // updateNote(id)
//     editHandler(editcontent,edittitle)
//     // try {
//     //   const config = {
//     //     headers: {
//     //       Authorization: `Bearer ${token}`,
//     //     },
//     //   };
//     //   let res = await axios.patch(`${url}/${id}`, config);
//     //   setNotes((prev) => [res.data.notes, ...prev]);
//     //   alert(`Note edited successfully`);
//     //   console.log("res", res.data.notes);
//     //   setTitle("");
//     //   setContent("");
//     // } catch (error) {
//     //   console.error("Error editing note:", error);
//     //   alert(`Trouble editing note`);
//     // }
//   };

//   return (
//     <>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title fs-5" id="exampleModalLabel">
//                 Edit Notes
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="edittitle"
//                     placeholder="Enter your title"
//                     onChange={inputHandler}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>

//                   <textarea
//                     rows={3}
//                     className="form-control"
//                     onChange={inputHandler}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 data-bs-dismiss="modal"
//                 onClick={editNotesHandler}
//               >
//                 Edit Notes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditModal;

export{}
