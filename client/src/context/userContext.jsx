import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteCookie, getCookie } from '../utils/cookies';

export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {

  const [user, setUser] = useState(null); //no user initially as if no one logged in

  const [isLoading, setIsLoading] = useState(true); // Add isLoading state


  // get user data profile
  const profileDataRetrive = async (token) => {
    // console.log('Fetching user data...', token);
    try {
      const response = await axios.get('/profile' + "?token=" + token)
      if (response.status === 200) {
        // console.log(response.data.user)
        setUser(response?.data.user);
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (!user) {
      const token = getCookie("token");
     // console.log(token, "<---TOKEN")
      if (token) {
        profileDataRetrive(token)
      }
      setUser(user);
    }
  }, [user]);
  console.log(user);

  const logout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
      deleteCookie("token")
      toast.success("logout Successful!")
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )

}
