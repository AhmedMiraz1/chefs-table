
import PropTypes from "prop-types";


const CurrentCook = ({ currentCook }) => {
 

  return (
    <div className="flex justify-evenly gap-5 bg-[#28282808] px-6 py-4 my-5 rounded-2xl  ">
        <p></p>
        <p className="text-justify"> {currentCook.name} </p>
        <p>
          {currentCook.preparing_time} <br /> minutes
        </p>
        <p>
          {currentCook.calories} <br /> calories
        </p>
      </div>
  );
};

CurrentCook.propTypes={
  currentCook:PropTypes.object.isRequired
}

export default CurrentCook;
