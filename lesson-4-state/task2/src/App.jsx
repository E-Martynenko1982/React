import React from "react";
import Clock from "./Clock";


const App = () => {
  return (
    <>
      <Clock location='NEW YORK' offset={-5} />
      <Clock location='KYIV' offset={2} />
      <Clock location='LONDON' offset={0} />
    </>

  )
};
export default App;