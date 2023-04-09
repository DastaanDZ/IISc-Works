
import { createContext, useState } from 'react';

const ModeDistanceContext = createContext('', ()=>{}, '', ()=>{});

export const ModeDistanceProvider = ({ children }) => {
  const [mode, setMode] = useState('');
  const modeChange = (mode) => setMode(mode)
  const [distance, setDistance] = useState('');
  const distanceChange = (distance) => setDistance(distance)

  return (
    <ModeDistanceContext.Provider value={{mode, modeChange, distance, distanceChange}}>
      {children}
    </ModeDistanceContext.Provider>
  );
};

export default ModeDistanceContext;