// import { CiClock2, GiChickenOven  } from "react-icons/fa";
import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  const { image, name, description, ingredients, preparing_time, calories } =
    cart;
  return (
    <div>
      <div className="p-6 border-[1px] border-[#28282833] rounded-2xl w-full h-full shadow-md">
        <div>
          <img className="w-full h-52 rounded-2xl" src={image} alt="" />
        </div>
        <h1 className="text-[#282828] text-xl font-semibold my-5">{name}</h1>
        <p className="text-[#878787]  mt-4 mb-10">{description}</p>
        <hr />
        <h2 className="text-[#282828] text-lg font-medium ">
          Ingredients: {ingredients.length}
        </h2>

        {ingredients.map((list, idx) => (
          <ul key={idx} className="text-[#878787] text-lg">
            <li> * {list} </li>
          </ul>
        ))}
        <hr className="my-7" />
        <div className="flex justify-between text-[#282828CC] mb-6">
          <p>{preparing_time} minutes</p>
          <p> {calories} calories</p>
        </div>
        <button className="bg-[#0BE58A] text-[#150B2B] text-lg font-medium px-6 py-3 rounded-3xl">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default Cart;
