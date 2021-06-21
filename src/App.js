import React from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <h2 className="text-center mt-5 text-info">Welcome to the Redux Shop</h2>
      <div className="row">
        <div className="col-md-7">
          <Shop />
        </div>
        <div className="col-md-5">
        <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
