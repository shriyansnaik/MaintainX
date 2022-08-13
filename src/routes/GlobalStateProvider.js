import React, {createContext, useState} from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GlobalStateContext.Provider value={{modalVisible, setModalVisible}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
