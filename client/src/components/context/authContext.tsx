// import React, { createContext, useEffect, useState } from 'react';

// interface ProviderProps{
//   children: React.ReactNode
// } 

// export type AppContextType={
//   token:string | null
//   setToken: Function
//   //React.Dispatch<React.SetStateAction<string | null>>
//   isLoggedIn:boolean
//   setisLoggedIn:Function
//   login:Function
//   logout:Function

// }

// export const AppContext = createContext<Partial<AppContextType>>({});
// export const AppContextProvider=({children}:ProviderProps)=>{
//   const[token,setToken]= useState<string | null>(null)
//   const ok= localStorage.getItem("token")
//   console.log(ok)

//   useEffect(()=>{
//     // if(ok)
//     // {
//        setToken(ok)
//     // }
//   },[])
    
//      return(
//       <AppContext.Provider value={{token,setToken}}>
//         {children}
//       </AppContext.Provider>
//      )
// }

export {}


