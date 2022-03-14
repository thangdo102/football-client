import React from "react";
// import AlertProvider from "./alert/state";
// import UserProvider from "./user/state";
// import AdminProvider from "./admin/state";
// import MomentsProvider from "./moments/state";
// import DrawZoneProvider from "./drawZone/state";
// import GamesProvider from "./games/state";
// import AdminV3Provider from "./adminV3/state";
// import DataGameProvider from "./dataGame/state";

const GlobalContextProvider = ({ children }) => {
  return (
    <>{children}</>
    // <AlertProvider>
    //   <UserProvider>
    //     <AdminProvider>
    //       <AdminV3Provider>
    //         <DataGameProvider>
    //           <DrawZoneProvider>
    //             <GamesProvider>
    //               <MomentsProvider>{children}</MomentsProvider>
    //             </GamesProvider>
    //           </DrawZoneProvider>
    //         </DataGameProvider>
    //       </AdminV3Provider>
    //     </AdminProvider>
    //   </UserProvider>
    // </AlertProvider>
  );
};

export default GlobalContextProvider
