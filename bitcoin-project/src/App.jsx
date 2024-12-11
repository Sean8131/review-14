import React from 'react'

const App = () => {

  const price = '100,000';

  const [value, setValue] = useState();

  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  if (response.ok) {
    let data = await response.json();
    setValue(data);
  }

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <p>${price}</p>
    </div>
  )
}

export default App
