import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  function goTo() {
    history.push("/contacts");
  }
  return (
    <>
      <div className="welcome text-center">
        <h1 className="mx-auto w-75">Welcome to the CRM !</h1>
        <button onClick={goTo}>Let's see your contacts</button>
      </div>
    </>
  );
}
