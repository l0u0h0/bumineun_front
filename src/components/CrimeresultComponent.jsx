import React from "react";
import { useLocation } from "react-router-dom";

export default function Crimeresult() {
  const location = new URLSearchParams(useLocation().search);
  const category = location.get("category");
  return (
    <div className="App-crimeresult">
      <p>{category}</p>
    </div>
  );
}
