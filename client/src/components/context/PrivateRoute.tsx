// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "./context/authContext";

// interface ProviderProps {
//   children: React.ReactNode;
// }

// export default function PrivateRoute({ children }: ProviderProps) {
//   const { token } = useContext(AppContext);
//   const [isLoading, setIsLoading] = useState(true); 

//    useEffect(()=>{
//        if(token){
//         setIsLoading(false);
//        }
//    },[token])
// //   console.log("2",token)
//   //new code

// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //    console.log(isLoggedIn);

// //   const checkUserToken = () => {
// //     const userToken = localStorage.getItem("token");
// //     console.log("cj",userToken)
// //     setTimeout(()=>{
// //      if (!userToken || userToken === undefined) {
// //       setIsLoggedIn(false);
// //       return <Navigate to="/login" />;
// //     }
// //     else{
// //          setIsLoggedIn(true);
// //     }
// //     },500)
   
// //   };

// //   useEffect(() => {
// //     checkUserToken();
// //   }, [isLoggedIn]);

// //   return (
// //     <>
// //       {isLoggedIn ? (
// //         children
// //       ) : (
// //         <>
// //           {alert("You are not logged in")}
// //           <Navigate to="/login" />
// //         </>
// //       )}
// //     </>
// //

//     if (!token && !isLoading) {
//       alert("You are not logged in");
//       return <Navigate to="/login" />;
//     }
//     return <>{children}</> 
  
// }
export {}