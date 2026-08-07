import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (friend, type) => {
    const newInteraction = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type: type,
      date: new Date().toISOString(),
      title: `${type} with ${friend.name}`,
    };

    setInteractions((previous) => [
      ...previous,
      newInteraction,
    ]);
  };

  return (
    <InteractionContext.Provider
      value={{
        interactions,
        addInteraction,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;