// import axios from "axios";
// const url = `http://localhost:3001/api/notes`;

 
//   //GET Notes
// export const fetchNotes = async (token) => {
//   try {
//     const config={
//         headers:{
//           Authorization:`Bearer ${token}`
//         }}
//     const res = await axios.get(`${url}`, config);
//     // console.log("1",res.data)
//     return await res.data;
//   } catch (error) {
//     console.error("Error getting notes:", error);
//   }
// };

// // Delete Notes
// export const deleteNote = async (id,token) => {
//     try {
//       const config={
//         headers:{
//           Authorization:`Bearer ${token}`
//         }}
//       await axios.delete(`${url}/${id}`,config);
//       fetchNotes();
//     } catch (error) {
//       console.error('Error deleting note:', error);
//     }
//   };

// //Update Notes
//   export const updateNote = async (id,token) => {
//     try {
//       const config={
//         headers:{
//           Authorization:`Bearer ${token}`
//         }}
//       await axios.patch(`${url}/${id}`,config);
//       fetchNotes();
//     } catch (error) {
//       console.error('Error deleting note:', error);
//     }
//   };

// //Status Note
//   export const statusNote = async (id,token) => {
//     try {
//       const config={
//         headers:{
//           Authorization:`Bearer ${token}`
//         }}
//       await axios.patch(`${url}/${id}`,config);
//       fetchNotes();
//     } catch (error) {
//       console.error('Error deleting note:', error);
//     }
//   };

