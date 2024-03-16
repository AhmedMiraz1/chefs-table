import { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("cart.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
