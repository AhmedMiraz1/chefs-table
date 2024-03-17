import { CiClock2,  } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import PropTypes from "prop-types";
import { VscCircleFilled } from "react-icons/vsc";

const Cart = ({ cart,handelAddToCook }) => {
  const { image, name, description, ingredients, preparing_time, calories } =
    cart;
  return (
    <div>
      <div className="p-6 border-[1px] border-[#28282833] rounded-2xl w-full h-full shadow-md">
        <div>
          <img className="w-full h-40 lg:h-64 rounded-2xl" src={image} alt="" />
        </div>
        <h1 className="text-[#282828] text-xl font-semibold my-5">{name}</h1>
        <p className="text-[#878787]  mt-4 mb-10">{description}</p>
        <hr />
        <h2 className="text-[#282828] text-lg font-medium ">
          Ingredients: {ingredients.length}
        </h2>

        {ingredients.map((list, idx) => (
          <ul  key={idx} className="text-[#878787] text-lg">

            <div className="flex items-center gap-1">
              <li><VscCircleFilled /></li>
            <li>  {list} </li>
            </div>
          </ul>
        ))}
        <hr className="my-7" />
        <div className="flex justify-between text-[#282828CC] mb-6">
         <div className="flex gap-2 items-center">
         <p>< CiClock2/></p>
          <p>{preparing_time} minutes</p>
         </div>
         <div className="flex gap-2 items-center">
         <p><MdOutlineWaterDrop/></p>
          <p> {calories} calories</p>
         </div>
        </div>
        <div>
        <button onClick={()=>handelAddToCook(cart)} className="bg-[#0BE58A] text-[#150B2B] text-lg font-medium px-6 py-3 rounded-3xl">
          Want to Cook
        </button>
       
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handelAddToCook:PropTypes.func.isRequired
};

export default Cart;
