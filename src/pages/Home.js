import React, { useState } from "react";

import Hello from "../components/Hello";

function Home() {
  const [name] = useState("Team-R");

  return (
    <div>
      <h2>Home Page</h2>
      <Hello name={name} />
    </div>
  );
}

export default Home;
