import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
  user: string | null;
  setUser: (user: string) => void;
  validUsernames: string[];
  setValidUsernames: (usernames: string[]) => void;
  isValidUser: (username: string) => boolean;
}


export const User = createContext({} as UserContextType);

export const UserContaxt = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [validUsernames, setValidUsernames] = useState<string[]>([]);

  const isValidUser = (username: string) => validUsernames.includes(username);
  return (
    <User.Provider value={{ user, setUser, validUsernames, setValidUsernames, isValidUser }}>
      {children}
    </User.Provider>
  );
};
export default UserContaxt