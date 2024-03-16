import PropTypes from "prop-types";
import AddingCook from "../AddingCook/AddingCook";

const Cook = ({ cook }) => {
  return (
    <div className="w-full lg:w-5/12">
      <div className="border-[#28282833] border-[1px] rounded-2xl px-6">
        <h1 className="text-center text-[#282828] text-2xl font-semibold mt-8">
          Want to cook:{cook.length}
        </h1>
        <hr className="my-6" />
        <div className="flex justify-evenly">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        {
            cook.map(addCook => <AddingCook key={addCook.id } addCook={addCook}></AddingCook>)
        }

        <h1 className="text-center text-[#282828] text-2xl font-semibold mt-8">
          Currently cooking: 02
        </h1>
        <hr className="my-7" />
        <div className="flex justify-evenly">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
      </div>
    </div>
  );
};

Cook.propTypes={
    cook:PropTypes.object.isRequired
}

export default Cook;
