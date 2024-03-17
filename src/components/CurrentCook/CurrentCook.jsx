import PropTypes from "prop-types";

const CurrentCook = ({ currentCook, idx }) => {
  return (
    <div>
      <div className="flex justify-evenly gap-5 bg-[#28282808] px-6 py-4 my-5 rounded-2xl  ">
        <p>{idx + 1}</p>
        <p className="text-justify"> {currentCook.name} </p>
        <p>
          {currentCook.preparing_time} <br /> minutes
        </p>
        <p>
          {currentCook.calories} <br /> calories
        </p>
      </div>
    </div>
  );
};

CurrentCook.propTypes = {
  currentCook: PropTypes.object.isRequired,
  idx: PropTypes.array,
};

export default CurrentCook;
