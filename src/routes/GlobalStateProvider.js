import React, {createContext, useState} from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [roleOfUser, setRoleOfUser] = useState('');

  return (
    <GlobalStateContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        accessToken,
        setAccessToken,
        roleOfUser,
        setRoleOfUser,
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
