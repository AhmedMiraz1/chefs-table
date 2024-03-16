import { useState } from "react";
import "./App.css";
import Cook from "./components/Cook/Cook";
import Carts from "./components/Header/Carts/Carts";
import Header from "./components/Header/Header";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cook, setCook]=useState([])
  const handelAddToCook = cart =>{
    const newCook =[...cook,cart]
    setCook(newCook)
    toast("Wow so easy !")
  }
  return (
    <>
      <div className="container mx-auto px-8 lg:px-16 my-10 lg:my-16">
        <Header></Header>

        <div>
          <h1 className="mt-24 mb-6 text-center text-2xl lg:text-5xl text-[#150B2B] font-medium lg:font-semibold">Our Recipes</h1>
          <p className="text-center text-[#150B2B99] font-normal mb-16 text-base">
            Explore our diverse collection of delectable recipes, crafted to
            tantalize your taste buds and ignite your culinary creativity. <br /> From
            savory classics to innovative delights, each dish promises an
            unforgettable gastronomic journey.
          </p>
         <div className="flex flex-col lg:flex-row gap-12 ">
         <Carts handelAddToCook={handelAddToCook}></Carts>
          <Cook cook={cook}></Cook>
         </div>
          
        </div>
       
      </div>
    </>
  );
}

export default App;
