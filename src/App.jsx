import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Routing from "./component/routing/Routing";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
