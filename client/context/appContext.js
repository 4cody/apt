import { createContext, useState } from "react";

export const User_data = createContext(null);

function Context({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  return (
    <User_data.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        accessToken,
        setAccessToken,
        user,
        setUser,
      }}
    >
      {children}
    </User_data.Provider>
  );
}

export default Context;
