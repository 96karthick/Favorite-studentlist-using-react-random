import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    const exists = favorites.find((s) => s.id === student.id);
    if (!exists) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </StudentContext.Provider>
  );
};