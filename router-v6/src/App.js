import React from "react";
import MyRouter from "./router/index";
import Tabbar from "./component/Tabbar";

function App() {
  return (
    <div>
      <MyRouter></MyRouter>
      <Tabbar/>
    </div>
  );
}

export default App;
