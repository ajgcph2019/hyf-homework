import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import GetUser from "./components/GetUser";

function App() {
  return (
    <div>
      <Navbar />
      <GetUser />
    </div>
  );
}
export default App;
