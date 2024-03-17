import PropTypes from "prop-types";

const AddingCook = ({addCook}) => {
    const {name, preparing_time, calories }=addCook
    return (
        <div>

            <div className="flex justify-evenly gap-5 bg-[#28282808] px-6 py-4 my-5 rounded-2xl  ">
                <p className="text-justify">  {name} </p>
                <p>{preparing_time} <br /> minutes</p>
                <p>{calories} <br /> calories</p>
                <button className="text-[#150B2B] text-base font-medium bg-[#0BE58A] px-3 py-2 rounded-full">Preparing</button>
            </div>
            
        </div>
    );
};

AddingCook.propTypes={
addCook:PropTypes.object.isRequired
}

export default AddingCook;