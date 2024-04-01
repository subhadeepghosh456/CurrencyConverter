import { useState } from "react";
// const host = 'api.frankfurter.app';
//  https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
// Currencies -> https://api.frankfurter.app/currencies

import "./App.css";
import CurrenctConverter from "./Componet/CurrenctConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <div className="container">
        <CurrenctConverter />
      </div>
    </div>
  );
}

export default App;
