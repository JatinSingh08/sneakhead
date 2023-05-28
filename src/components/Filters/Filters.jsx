import React from "react";
import { useData } from "../../context/data/data-context";

const Filters = () => {
  const { state, applyFilters } = useData();

  const brandsCheckBoxHandler = (e) => {
    let brandsArr = state.filters.brands;
    if (e.target.checked) {
      brandsArr.push(e.target.value);
    } else {
      brandsArr = brandsArr.filter((brand) => brand !== e.target.value);
    }
    applyFilters(e.target.name, brandsArr);
  };

  const categoryCheckboxHandler = (e) => {
    let categoryArr = state.filters.categories;
    if (e.target.checked) {
      categoryArr.push(e.target.value);
    } else {
      categoryArr = categoryArr.filter(
        (category) => category !== e.target.value
      );
    }
    applyFilters(e.target.name, categoryArr);
  };

  return (
    <div className="sticky p-10 h-[100vh] w-[380px] left-0 top-0 gap-6 flex flex-col border-r-2 overflow-y-scroll scrollbar-theme">
      {/* Price slider */}
      <div className="flex flex-col items-start ">
        <h1 className="font-semibold text-[20px] w-full">
          Price Range: ₹ {state.filters.priceRange}
        </h1>
        <div className="flex justify-between w-full">
          <span>1000</span>
          <span>5000</span>
          <span>10000</span>
        </div>
        <div className="w-full">
          <input
            type="range"
            min={1000}
            max={10000}
            step={1000}
            name="priceRange"
            value={state.filters.priceRange}
            className="w-full"
            onChange={(e) => applyFilters(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Brands  */}
      <div className="grid items-start justify-items-start">
        <h1 className="underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg">
          Brands
        </h1>
        <div className="grid gap-1 justify-items-start mt-3">
          <label className="flex gap-2">
            <input
              type="checkbox"
              className=""
              name="brands"
              value="puma"
              onChange={brandsCheckBoxHandler}
            />
            Puma
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="adidas"
              name="brands"
              onChange={brandsCheckBoxHandler}
            />
            Adidas
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="nike"
              name="brands"
              onChange={brandsCheckBoxHandler}
            />
            Nike
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="vans"
              name="brands"
              onChange={brandsCheckBoxHandler}
            />
            Vans
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="converse"
              name="brands"
              onChange={brandsCheckBoxHandler}
            />
            Converse
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="grid items-start justify-items-start">
        <h1 className="underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg">
          Rating
        </h1>
        <div className="grid gap-1 justify-items-start mt-3">
          <label className="flex gap-2">
            <input
              type="radio"
              className=""
              name="rating"
              value="4"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            4 Star and above
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            3 Star and above
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            2 Star and above
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            1 Star and above
          </label>
        </div>
      </div>

      {/* Category */}
      <div className="grid items-start justify-items-start">
        <h1 className="underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg">
          Category
        </h1>
        <div className="grid gap-1 justify-items-start mt-3">
          <label className="flex gap-2">
            <input
              type="checkbox"
              className=""
              value="men"
              name="categories"
              onChange={categoryCheckboxHandler}
            />
            Men
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="women"
              name="categories"
              onChange={categoryCheckboxHandler}
            />
            Women
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="sports"
              name="categories"
              onChange={categoryCheckboxHandler}
            />
            Sports
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              value="trending"
              name="categories"
              onChange={categoryCheckboxHandler}
            />
            Trending
          </label>
        </div>
      </div>

      {/* Sort By */}
      <div className="grid items-start justify-items-start">
        <h1 className="underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg">
          Sort By
        </h1>
        <div className="grid gap-1 justify-items-start mt-3">
          <label className="flex gap-2">
            <input
              type="radio"
              className=""
              name="sortBy"
              value="highToLow"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            Price High to Low
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="sortBy"
              value="lowToHigh"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
            />
            Price Low to High
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
