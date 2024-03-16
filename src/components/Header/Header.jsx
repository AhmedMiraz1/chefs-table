import frame from "../../assets/Frame.png";
import cover from "../../assets/cover.png";

import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="flex  justify-between items-center">
        <div>
          <h1 className="text-[#150B2B] text-2xl lg:text-4xl font-semibold">
            Recipe Calories
          </h1>
        </div>
        <div className=" hidden lg:flex gap-5 lg:gap-16 text-[#150B2BB2]">
          <p>Home</p>
          <p>Recipes</p>
          <p>About</p>
          <p>Search</p>
        </div>

        <div className="flex items-center ">
          <p className="flex items-center bg-[#150B2B0D] px-6 py-3 rounded-2xl">
            {" "}
            <span>
              {" "}
              <CiSearch />
            </span>{" "}
            <input
              className=" mr-3 w-24 lg:w-48 bg-[#150B2B0D]"
              type="search"
              name=""
              id=""
              placeholder="Search"
            />
          </p>

          <img
            className="rounded-full  ml-2 bg-[#0BE58A] p-2"
            src={frame}
            alt=""
          />
        </div>
      </div>

      {/*Banner section  */}

      <div
        className="bg-cover bg-no-repeat h-full lg:h-[60vh] w-full rounded-2xl my-10"
        style={{ backgroundImage: `url("${cover}")` }}
      >
        <div className="text-center py-5 lg:py-32">
          <h1 className="text-[#FFFFFF] text-2xl lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p className=" text-lg font-normal text-[#FFFFFF] mt-6 mb-10">
            Unleash your culinary potential with personalized cooking classes
            tailored to your tastes and skill level. Master the art of <br /> cooking
            with expert guidance and hands-on experience.
          </p>
          <div className="flex gap-4 lg:gap-8 justify-center items-center">
            <button className="text-[#150B2B] text-lg lg:text-xl font-medium lg:font-semibold bg-[#0BE58A] px-3 lg:px-7 py-2 lg:py-5 rounded-3xl">Explore Now</button>
             <button className="text-[#FFFFFF] text-lg lg:text-xl font-medium lg:font-semibold px-3 lg:px-7 py-2 lg:py-5 rounded-3xl border-[1px]  border-white">Our Feedback</button></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
