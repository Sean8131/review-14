import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [value, setValue] = useState('100,000');

  // const price = '100,000';
  const price = async () => {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    console.log(response);

    if (response.ok) {
      let data = await response.json();
      setValue(data);
    }
  };

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <p>${value}</p>
    </div>
  );
};

export default App;
