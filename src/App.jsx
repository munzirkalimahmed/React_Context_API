 import Items from "./components/items";
 import React from "react";
 import Cart from "./components/cart";


function App() {


  return (
    <div>
      <Items name="MacBook Pro" price={100000}/>
      <Items name="Pendrive" price={40000}/>
      <items name="Mobile" price={35000}/>
      <Cart/>
    </div>
  );
}

export default App;
