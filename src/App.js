import React, { createContext } from 'react';
import ComA from './ComA';


const firstName = createContext();

function App() {
  return (
    <>
      <firstName.Provider value={"Mehr"}>
        <ComA />
      </firstName.Provider>
    </>
  );
};
export default App;
export { firstName };
