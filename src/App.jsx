import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const upTime = new Date().toLocaleTimeString();
    setCurrentTime(upTime);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="main-div">
      <div className="digitalWatch">
        <h1>Digital watch</h1>
        <h2>{currentTime}</h2>
      </div>
    </div>
  );
};

export default App;
