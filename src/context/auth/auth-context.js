import { createContext, useContext, useState } from "react";
import { loginServices, signupServices } from "../../services/services";


const AuthContext = createContext();

// const guestUser = {
//   email: "jatinsingh@gmail.com",
//   password: "12345678"
// }

const AuthProvider = ({children}) => {
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localStorageUser?.user);

  const loginUser = async (email, password) => {
    try {
      const {status, data: {foundUser, encodedToken}} = await loginServices({email, password});
      if(status === 200 || 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: encodedToken,
            user: foundUser
          })
        );
        setUser(foundUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log("error in loginUser function", error.message);
    }
  }

  const logoutUser = () => {
    localStorage.removeItem('login');
    setToken(null);
    setUser(null);
  }

  const signupUser = async (firstName, lastName, email, password) => {
    try {
      const { status, data: { createdUser, encodedToken } } = await signupServices({
        firstName, 
        lastName,
        email,
        password
      });
      if(status === 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: encodedToken,
            user: createdUser
          })
        );
        setUser(createdUser);
        setToken(encodedToken);
      }
     
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
    value={{ 
    loginUser, 
    logoutUser, 
    signupUser,
    user, 
    token
  }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };