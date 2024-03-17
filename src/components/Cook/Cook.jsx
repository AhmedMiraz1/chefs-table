import PropTypes from "prop-types";
import AddingCook from "../AddingCook/AddingCook";
import CurrentCook from "../CurrentCook/CurrentCook";

const Cook = ({ cook, handelAddToCurrentCooking, currentCook }) => {
  
  return (
    <div className="w-full lg:w-5/12">
      <div className="border-[#28282833] border-[1px] rounded-2xl px-6">
        <h1 className="text-center text-[#282828] text-2xl font-semibold mt-8">
          Want to cook:{cook?.length || 0}
        </h1>
        <hr className="my-6" />
        <div className="flex justify-evenly">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        {cook?.map((addCook,idx) => (
          <AddingCook
            key={addCook.id}
            idx={idx}
            addCook={addCook}
            handelAddToCurrentCooking={handelAddToCurrentCooking}
          ></AddingCook>
        ))}

        <h1 className="text-center text-[#282828] text-2xl font-semibold mt-8">
          Currently cooking: {currentCook?.length || 0}
        </h1>
        <hr className="my-7" />
        <div className="flex justify-evenly">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        <div>
          {currentCook?.map((cook, idx) => (
            <CurrentCook
              key={idx}
              idx={idx}
              currentCook={cook}
            ></CurrentCook>
          ))}
        </div>
        <div className="flex justify-around items-center my-11">
        <p>Total Time = <span>0</span> minutes</p>
        <p>Total Calories = <span>0</span> calories</p>
      </div>
      </div>
      
    </div>
  );
};

Cook.propTypes = {
  cook: PropTypes.object.isRequired,
  handelAddToCurrentCooking: PropTypes.func.isRequired,
  currentCook: PropTypes.object.isRequired,
};

export default Cook;
