import React from "react";
import {
  adidasLogo,
  converseLogo,
  nikeLogo,
  pumaLogo,
  vansLogo,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { ActionType } from "../../reducers/constants";

const Brands = () => {
  const { state, applyFilters, dispatch } = useData();
  const navigate = useNavigate();
  const brandsCheckBoxHandler = (e) => {
    dispatch({ type: ActionType.CLEAR_FILTER })
    let brandsArr = [];
    console.log(e.target.dataset.value);
    brandsArr.push(e.target.dataset.value);
    applyFilters(e.target.name, brandsArr);
    navigate("/productlist");
  };
  return (
      <div className="grid grid-cols-5 items-center justify-items-center m-auto w-[80vw] mt-10 md:gap-4 md:w-[90vw] md:mt-14">
        <img
          src={pumaLogo}
          alt="puma-logo"
          data-value="puma"
          name="brands"
          onClick={brandsCheckBoxHandler}
          className="w-auto h-28 hover:cursor-pointer hover:scale-110 hover:drop-shadow-2xl md:w-16 md:h-16 transform duration-500"
        />
        <img
          src={adidasLogo}
          data-value="adidas"
          name="brands"
          onClick={brandsCheckBoxHandler}
          alt="adidas-logo"
          className="w-auto h-28 hover:cursor-pointer hover:scale-110 hover:drop-shadow-2xl md:w-16 md:h-16 transform duration-500"
        />
        <img
          src={nikeLogo}
          data-value="nike"
          name="brands"
          onClick={brandsCheckBoxHandler}
          alt="nike-logo"
          className="ww-auto h-28 hover:cursor-pointer hover:scale-110 hover:drop-shadow-2xl md:w-16 md:h-16 transform duration-500"
        />
        <img
          src={vansLogo}
          data-value="vans"
          name="brands"
          onClick={brandsCheckBoxHandler}
          alt="vans-logo"
          className="w-auto h-28 hover:cursor-pointer hover:scale-110 hover:drop-shadow-2xl md:w-16 md:h-16 transform duration-500"
        />
        <img
          src={converseLogo}
          data-value="converse"
          name="brands"
          onClick={brandsCheckBoxHandler}
          alt="converse-logo"
          className="w-auto h-28 hover:cursor-pointer hover:scale-110 hover:drop-shadow-2xl md:w-16 md:h-16 transform duration-500"
        />
      </div>
  );
};

export default Brands;
