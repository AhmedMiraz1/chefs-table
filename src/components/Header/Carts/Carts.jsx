import { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import PropTypes from "prop-types";

const Carts = ({handelAddToCook}) => {
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
          <Cart key={cart.id} cart={cart} handelAddToCook={handelAddToCook}></Cart>
        ))}
      </div>
    </div>
  );
};
Carts.propTypes={
    handelAddToCook:PropTypes.func.isRequired 
}

export default Carts;
