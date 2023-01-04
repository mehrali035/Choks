import React, { createContext } from 'react';
import ComA from './ComA';


const firstName = createContext();
const lastName = createContext();

function App() {
  return (
    <>
      <firstName.Provider value={"Mehr"}>
      <lastName.Provider value={"Ali"}>
        <ComA />
      </lastName.Provider>
      </firstName.Provider>
    </>
  );
};
export default App;
export { firstName ,lastName};
