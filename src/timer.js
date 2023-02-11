import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);

  console.log("Component 업데이트!!");

  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time} 초</h3>
      <button onClick={updateTime}>클릭하면 1초씩 늘어남</button>
    </div>
  );
}

export default TimerComponent;
