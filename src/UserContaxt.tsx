import React, { createContext, useState, ReactNode, useContext } from 'react';

export interface UserType {
  user: string;
  age: number ;
  email: string;
  phoneNumber: number;
}


export const User = createContext({} as any);

export const UserContaxt = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>();
  const [username, setUserName] = useState<string | null>(null);
  const [validUsernames, setValidUsernames] = useState<string[]>([]);

  const isValidUser = (username: string) => validUsernames.includes(username);
  return (
    <User.Provider value={{ user, setUser, validUsernames, setValidUsernames, isValidUser,username,setUserName }}>
      {children}
    </User.Provider>
  );
};
export default UserContaxt