import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  console.log("🔹 Component rendered with count:", count);

  useEffect(() => {
    console.log("🎯 useEffect executed!");

    return () => {
      console.log("🧹 Cleanup (before re-run or unmount)");
    };
  },);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseEffectDemo;