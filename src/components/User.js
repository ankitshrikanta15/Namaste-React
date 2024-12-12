import { useEffect, useState } from "react";

const User = ({name}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count, count2]);


  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Click Here</button>
      <h2>Name: {name}</h2>
      <h2>Location: Jharsuguda</h2>
      <h2>Contact: @ankitshrikanta</h2>
    </div>
  );
};

export default User;