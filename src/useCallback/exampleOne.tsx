import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  // Define a function that increments the count
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]); // Dependency array: specify dependencies that trigger the function re-creation

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
